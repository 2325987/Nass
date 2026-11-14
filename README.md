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

**Nota:** el flujo de GitHub Actions instala las dependencias automáticamente. Si ejecuta `npm install` localmente, también puede subir el archivo `package-lock.json` generado.

## Importante: límites de la primera versión
Las misiones, las cuentas, los mensajes del foro y las sugerencias se guardan en `localStorage`, exclusivamente en el navegador y dispositivo donde se introducen. **No existe una base de datos compartida** y los visitantes no verán los mensajes de otros dispositivos. Las contraseñas del registro de demostración se guardan localmente sin seguridad de producción; **no utilice contraseñas reales ni información personal sensible**. Antes de lanzar un foro o registro real, conecte un servicio de autenticación y una base de datos segura (por ejemplo Supabase) y aplique reglas de acceso.

GitHub Pages aloja archivos estáticos y no puede ejecutar por sí solo una base de datos o backend. Los archivos TXT se actualizan al editarlos y volver a publicar el repositorio.
