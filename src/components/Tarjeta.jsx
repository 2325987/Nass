export default function Tarjeta({ Imagen, titulo, descripcion, color }) {
  return (
    <article className="feature-card tarjeta-lectura">
      <div className="tarjeta-encabezado">
        <h3>{titulo}</h3>
        <span className={'card-icon ' + color} aria-hidden="true">
          <Imagen size={22} />
        </span>
      </div>
      <p>{descripcion}</p>
    </article>
  );
}
