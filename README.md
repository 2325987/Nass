# Nass — Proyecto web

Página web creada con React + Vite. Incluye portada con carrusel, logo, tarjetas, navegación, misiones, foro, noticias, registro local, ajustes de idioma, tamaño de letra, modo claro/oscuro y sugerencias.

## Requisitos
- Node.js 20 o superior
- Visual Studio Code (opcional)

## Ejecutar en computadora
1. Abra esta carpeta en VS Code.
2. Abra la terminal.
3. Ejecute `npm install`.
4. Ejecute `npm run dev`.
5. Abra la dirección indicada, normalmente `http://localhost:5173`.

## Editar los textos TXT
- Español: `public/textos/es/inicio.txt` y `public/textos/es/noticias.txt`
- Inglés: `public/textos/en/inicio.txt` y `public/textos/en/noticias.txt`
- Las imágenes de ejemplo están en `public/imagenes/`.
- `index.html` está en la raíz del proyecto.

## Publicar en GitHub Pages
1. Cree un repositorio público llamado exactamente **Nass** en GitHub (o cambie `base` en `vite.config.js` si utiliza otro nombre).
2. Suba el **contenido de la carpeta Nass** a la raíz del repositorio (no la carpeta contenedora ni el ZIP).
3. Confirme que la rama principal se llama `main`.
4. En GitHub vaya a **Settings > Pages > Build and deployment > Source > GitHub Actions**.
5. El archivo `.github/workflows/deploy.yml` publicará automáticamente cada cambio en `main`.
6. Su dirección será `https://USUARIO.github.io/Nass/`.
7. Espere a que la acción termine correctamente en la pestaña Actions.

El flujo **Publicar Nass** instala las dependencias con `npm ci`, compila el proyecto con Vite y publica la carpeta `dist`. Conserve `package-lock.json` en el repositorio. Si Pages ya está configurado, puede iniciar el flujo desde **Actions > Publicar Nass > Run workflow > main**. Las secciones usan rutas como `/#/noticias` para que se puedan abrir y recargar directamente en GitHub Pages.

## Registro y foro con base de datos local

IndexedDB crea la base `nass-local` al abrir el sitio desde GitHub Pages mediante HTTPS o desde Vite en localhost. No requiere importar SQL ni configurar un servidor.

1. Abra **Registro / Ingreso**, seleccione **Registrarse** y cree un usuario de prueba.
2. Se abrirá el foro. Publique un mensaje, recargue la página y compruebe que el mensaje y la sesión siguen guardados.
3. Regrese a **Registro / Ingreso** y pulse **Salir**. En el foro volverá a aparecer el enlace para iniciar sesión.

Las contraseñas nuevas se almacenan como hashes PBKDF2 con sal. La primera vez que abre esta versión, Nass migra las cuentas, la sesión y los mensajes previos del mismo navegador, si existen. Las misiones, los ajustes y las sugerencias conservan su almacenamiento anterior.

Las cuentas, las sesiones y los mensajes pertenecen al navegador, perfil y dirección usados. Un registro en localhost no aparece en GitHub Pages. Otros visitantes no ven sus publicaciones y borrar los datos del sitio borra también la base. Para un foro compartido se requiere un servicio externo.
