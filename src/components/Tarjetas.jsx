import { Zap, BookOpen, Satellite, Atom, Telescope } from 'lucide-react';
import Tarjeta from './Tarjeta';
import './Tarjetas.css';

const textos = {
  es: {
    titulo: 'Aprende a tu ritmo',
    introduccion: 'NASS cuenta con cuatro niveles de lectura para que cualquier persona, independientemente de sus conocimientos, intereses o experiencia con la investigación científica, pueda explorar cada expediente a su propio ritmo.',
    tarjetas: [
      ['Nivel 1 — Rápido', 'Una introducción de aproximadamente 30 segundos para conocer lo esencial de cada equipo. Este mismo texto aparece en la descripción de su tarjeta.'],
      ['Nivel 2 — Básico', 'Profundiza en la historia del equipo: por qué fue creado, cuál era su propósito, cómo se desarrolló su misión y qué ocurrió con él.'],
      ['Nivel 3 — Intermedio', 'Explora sus resultados, características, capacidades y los desafíos que enfrentó durante su desarrollo y operación.'],
      ['Nivel 4 — Avanzado', 'Descubre los elementos científicos, tecnológicos y de ingeniería que hicieron posible la creación, el desarrollo y el funcionamiento del equipo y su misión.'],
      ['Continúa explorando', 'Al final de cada expediente encontrarás recursos adicionales para ampliar tus conocimientos, consultar información y continuar investigando por tu cuenta.'],
    ],
  },
  en: {
    titulo: 'Learn at your own pace',
    introduccion: 'NASS offers four reading levels so anyone can explore each case file at their own pace, regardless of their knowledge, interests, or experience with scientific research.',
    tarjetas: [
      ['Level 1 — Quick', 'A roughly 30-second introduction to the essentials of each piece of equipment. The same text appears in its card description.'],
      ['Level 2 — Basic', 'Learn the story behind the equipment: why it was built, what it was meant to do, how its mission unfolded, and what happened to it.'],
      ['Level 3 — Intermediate', 'Explore its results, features, capabilities, and the challenges it faced during development and operation.'],
      ['Level 4 — Advanced', 'Discover the science, technology, and engineering that made it possible to build, develop, and operate the equipment and carry out its mission.'],
      ['Keep exploring', 'At the end of each case file, you’ll find additional resources to learn more, look up information, and continue your own research.'],
    ],
  },
};

const imagenes = [Zap, BookOpen, Satellite, Atom, Telescope];
const colores = ['teal', 'blue', 'gold', 'purple', 'teal'];

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
