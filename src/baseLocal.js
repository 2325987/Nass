const SESION = 'sesion';
const MIGRACION = 'migracion-local-v1';
let basePendiente;

function resultado(peticion) {
  return new Promise((resolve, reject) => {
    peticion.onsuccess = () => resolve(peticion.result);
    peticion.onerror = () => reject(peticion.error);
  });
}

async function transaccion(base, tablas, modo, operacion) {
  const tx = base.transaction(tablas, modo);
  const terminada = new Promise((resolve, reject) => {
    tx.oncomplete = resolve;
    tx.onabort = () => reject(tx.error ?? new Error('Transacción cancelada'));
  });

  try {
    const [valor] = await Promise.all([operacion(tx), terminada]);
    return valor;
  } catch (error) {
    try {
      tx.abort();
    } catch {
      // Puede haber finalizado por un error de IndexedDB.
    }
    throw error;
  }
}

function claveUsuario(nombre) {
  return nombre.trim().toLowerCase();
}

async function calcularHash(contraseña, sal) {
  const bytes = new TextEncoder().encode(contraseña);
  const clave = await crypto.subtle.importKey('raw', bytes, 'PBKDF2', false, ['deriveBits']);
  const hash = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: sal, iterations: 600_000, hash: 'SHA-256' },
    clave,
    256,
  );
  return Array.from(new Uint8Array(hash));
}

async function prepararCuenta(nombre, contraseña) {
  const sal = crypto.getRandomValues(new Uint8Array(16));
  return {
    clave: claveUsuario(nombre),
    nombre: nombre.trim(),
    sal,
    hash: await calcularHash(contraseña, sal),
  };
}

function leerAnterior(clave, valorPorDefecto) {
  try {
    return JSON.parse(localStorage.getItem(clave)) ?? valorPorDefecto;
  } catch {
    return valorPorDefecto;
  }
}

async function migrarDatos(base) {
  const migrada = await transaccion(base, ['ajustes'], 'readonly',
    tx => resultado(tx.objectStore('ajustes').get(MIGRACION)));

  if (!migrada) {
    const cuentasAnteriores = leerAnterior('nass_accounts', []);
    const mensajesAnteriores = leerAnterior('nass_posts', []);
    const sesionAnterior = leerAnterior('nass_currentUser', null);
    const cuentas = [];

    for (const { name, password } of cuentasAnteriores) {
      cuentas.push(await prepararCuenta(name, password));
    }

    await transaccion(base, ['cuentas', 'mensajes', 'ajustes'], 'readwrite', async tx => {
      const ajustes = tx.objectStore('ajustes');
      if (await resultado(ajustes.get(MIGRACION))) return;

      for (const cuenta of cuentas) tx.objectStore('cuentas').put(cuenta);
      for (const { author, text, date } of [...mensajesAnteriores].reverse()) {
        tx.objectStore('mensajes').add({ autor: author, texto: text, fechaAnterior: date });
      }

      const cuentaActiva = cuentas.find(cuenta => cuenta.nombre === sesionAnterior);
      if (cuentaActiva) ajustes.put(cuentaActiva.clave, SESION);
      ajustes.put(true, MIGRACION);
    });
  }

  try {
    for (const clave of ['nass_accounts', 'nass_posts', 'nass_currentUser']) {
      localStorage.removeItem(clave);
    }
  } catch {
    // IndexedDB ya confirmó la migración.
  }
}

async function abrirBase() {
  const peticion = indexedDB.open('nass-local', 1);
  peticion.onupgradeneeded = () => {
    const base = peticion.result;
    base.createObjectStore('cuentas', { keyPath: 'clave' });
    base.createObjectStore('mensajes', { keyPath: 'id', autoIncrement: true });
    base.createObjectStore('ajustes');
  };
  const base = await resultado(peticion);
  base.onversionchange = () => {
    base.close();
    basePendiente = undefined;
  };
  try {
    await migrarDatos(base);
    return base;
  } catch (error) {
    base.close();
    throw error;
  }
}

function obtenerBase() {
  basePendiente ??= abrirBase().catch(error => {
    basePendiente = undefined;
    throw error;
  });
  return basePendiente;
}

async function cuentaEnSesion(tx) {
  const clave = await resultado(tx.objectStore('ajustes').get(SESION));
  return clave ? resultado(tx.objectStore('cuentas').get(clave)) : undefined;
}

export async function recuperarSesion() {
  const cuenta = await transaccion(await obtenerBase(), ['cuentas', 'ajustes'], 'readonly', cuentaEnSesion);
  return cuenta?.nombre ?? null;
}

export async function registrarUsuario(nombre, contraseña) {
  const base = await obtenerBase();
  const cuenta = await prepararCuenta(nombre, contraseña);
  return transaccion(base, ['cuentas', 'ajustes'], 'readwrite', async tx => {
    const cuentas = tx.objectStore('cuentas');
    if (await resultado(cuentas.getKey(cuenta.clave))) return null;
    cuentas.add(cuenta);
    tx.objectStore('ajustes').put(cuenta.clave, SESION);
    return cuenta.nombre;
  });
}

export async function iniciarSesion(nombre, contraseña) {
  const base = await obtenerBase();
  const clave = claveUsuario(nombre);
  const cuenta = await transaccion(base, ['cuentas'], 'readonly',
    tx => resultado(tx.objectStore('cuentas').get(clave)));

  if (!cuenta) return null;
  const hash = await calcularHash(contraseña, cuenta.sal);
  if (!cuenta.hash.every((byte, indice) => byte === hash[indice])) return null;

  await transaccion(base, ['ajustes'], 'readwrite',
    tx => resultado(tx.objectStore('ajustes').put(clave, SESION)));
  return cuenta.nombre;
}

export async function cerrarSesion() {
  await transaccion(await obtenerBase(), ['ajustes'], 'readwrite',
    tx => resultado(tx.objectStore('ajustes').delete(SESION)));
}

export async function listarMensajes() {
  const mensajes = await transaccion(await obtenerBase(), ['mensajes'], 'readonly',
    tx => resultado(tx.objectStore('mensajes').getAll()));
  return mensajes.reverse();
}

export async function publicarMensaje(usuario, texto) {
  return transaccion(await obtenerBase(), ['cuentas', 'ajustes', 'mensajes'], 'readwrite', async tx => {
    const cuenta = await cuentaEnSesion(tx);
    if (cuenta?.nombre !== usuario) return null;
    const mensaje = { autor: cuenta.nombre, texto, fecha: Date.now() };
    const id = await resultado(tx.objectStore('mensajes').add(mensaje));
    return { ...mensaje, id };
  });
}
