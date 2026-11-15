import React from 'react';

export default function Footer({ t }) {
  return (
<footer className="pie-nass">

  <nav className="pie-nasa" aria-label="Enlaces de la NASA">
    <strong>Fuentes</strong>
    <a href="https://www.nasa.gov/">NASA</a>
    <a href="https://science.nasa.gov/moon/">La Luna</a>
    <a href="https://science.nasa.gov/mars/">Marte</a>
    <a href="https://images.nasa.gov/">Galería de imágenes</a>
  </nav>

  <p className="pie-centro">PXZstudio &copy; 2026</p>

  <div className="pie-desarrolladores">
    <strong>Desarrolladores</strong>
    <a href="https://github.com/USUARIO_JUAN">
      Juan Carlos Ulate Cardenal
    </a>
    <a href="https://github.com/USUARIO_ANABELEN">
      Anabelen Ulate Cespedes
    </a>
  </div>
</footer>

  );
}
