import { Zap, BookOpen, Telescope } from 'lucide-react';
import Tarjeta from './Tarjeta';
import './Tarjetas.css';

const textos = {
  es: {
    titulo: 'Aprende a tu ritmo',
    introduccion: 'Explora cada expediente a tu ritmo. Empieza con un resumen y sigue con la historia de la misión. Algunos expedientes también incluyen recursos adicionales.',
    tarjetas: [
      ['Nivel 1 — Rápido', 'Una introducción de aproximadamente 30 segundos para conocer lo esencial de cada equipo. Este mismo texto aparece en la descripción de su tarjeta.'],
      ['Nivel 2 — Básico', 'Profundiza en la historia del equipo: por qué fue creado, cuál era su propósito, cómo se desarrolló su misión y qué ocurrió con él.'],
      ['Nivel 3 — Recursos', 'Cuando el expediente incluye recursos, puedes consultar sus enlaces y continuar investigando por tu cuenta.'],
    ],
  },
  en: {
    titulo: 'Learn at your own pace',
    introduccion: 'Explore each case file at your own pace. Start with an overview and continue with the mission’s history. Some case files also include additional resources.',
    tarjetas: [
      ['Level 1 — Quick', 'A roughly 30-second introduction to the essentials of each piece of equipment. The same text appears in its card description.'],
      ['Level 2 — Basic', 'Learn the story behind the equipment: why it was built, what it was meant to do, how its mission unfolded, and what happened to it.'],
      ['Level 3 — Resources', 'When a case file includes resources, follow its links to learn more and continue your research.'],
    ],
  },
};

const imagenes = [Zap, BookOpen, Telescope];
const colores = ['teal', 'blue', 'teal'];

export default function Tarjetas({ lang }) {
  const contenido = textos[lang] || textos.es;

  return (
    <section className="section tarjetas-inicio" aria-labelledby="titulo-tarjetas">
      <div className="section-heading">
        <h2 id="titulo-tarjetas">{contenido.titulo}</h2>
        <p className="tarjetas-introduccion">{contenido.introduccion}</p>
      </div>
      <div className="cards tarjetas-lectura">
        {contenido.tarjetas.map(([titulo, descripcion], indice) => (
          <Tarjeta
            key={titulo}
            titulo={titulo}
            descripcion={descripcion}
            Imagen={imagenes[indice]}
            color={colores[indice]}
          />
        ))}
      </div>
    </section>
  );
}
