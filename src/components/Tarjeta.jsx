import React from 'react';
import { Link } from 'react-router-dom';

export default function Tarjeta({ url, icono, titulo, descripcion, color, leerMas }) {
  return (
    <Link className="feature-card" to={url}>
      <span className={'card-icon ' + color}>{icono}</span>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <span className="card-link">{leerMas} →</span>
    </Link>
  );
}
