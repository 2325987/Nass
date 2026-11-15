import { ArrowUpRight, Newspaper } from 'lucide-react';
import { cursosNoticias } from './cursosNoticias';
import './Noticias.css';

const imagenes = import.meta.env.BASE_URL + 'imagenes/noticias/';

const textos = {
  es: {
    date: '14 y 15 de noviembre de 2026',
    event: 'The Next Frontier reunió a estudiantes y personas de distintas disciplinas en un hackatón mundial. Durante dos días, los equipos usaron datos abiertos de la NASA para desarrollar soluciones a retos de la Tierra y del espacio, desde la exploración lunar hasta futuras misiones a Marte.',
    eventLink: 'Ver la edición 2026',
    eventAlt: 'Arte oficial de The Next Frontier con la Luna y Marte reflejados en el visor de un astronauta',
    courses: 'Cursos gratuitos de la NASA',
    intro: 'Encuentre recursos gratuitos para aprender sobre observación de la Tierra, exploración espacial y tecnologías como la inteligencia artificial. Los materiales de programas como Earthdata y ARSET permiten explorar temas como el clima, el agua y las imágenes satelitales.',
    catalog: 'Ver catálogo de AprenderGratis.es',
    courseLink: 'Ver curso',
    upcoming: 'Próximamente',
  },
  en: {
    date: 'November 14–15, 2026',
    event: 'The Next Frontier brought students and people from different fields together for a global hackathon. Over two days, teams used NASA’s open data to develop solutions to challenges on Earth and in space, from lunar exploration to future missions to Mars.',
    eventLink: 'Explore the 2026 edition',
    eventAlt: 'Official The Next Frontier artwork with the Moon and Mars reflected in an astronaut’s visor',
    courses: 'Free NASA courses',
    intro: 'Find free resources for learning about Earth observation, space exploration, and technologies such as artificial intelligence. Programs like Earthdata and ARSET offer materials on climate, water, and satellite imagery.',
    catalog: 'Browse the AprenderGratis.es catalog',
    courseLink: 'View course',
    upcoming: 'Coming soon',
  },
};

export default function Noticias({ t, lang }) {
  const idioma = lang === 'en' ? 'en' : 'es';
  const texto = textos[idioma];

  return (
    <div className="page section noticias">
      <div className="page-title">
        <Newspaper aria-hidden="true" />
        <h1>{t.newsTitle}</h1>
      </div>

      <article className="noticias-evento" aria-labelledby="noticias-evento-titulo">
        <img src={imagenes + 'space-apps-2026.png'} alt={texto.eventAlt} width="896" height="600" />
        <div className="noticias-evento-texto">
          <p className="noticias-fecha">
            <time dateTime="2026-11-14">{texto.date}</time>
          </p>
          <h2 id="noticias-evento-titulo">NASA Space Apps Challenge 2026</h2>
          <p>{texto.event}</p>
          <a className="btn btn-accent" href="https://www.spaceappschallenge.org/2026/">
            {texto.eventLink} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </article>

      <section className="noticias-cursos" aria-labelledby="noticias-cursos-titulo">
        <div className="noticias-intro">
          <h2 id="noticias-cursos-titulo">{texto.courses}</h2>
          <p>{texto.intro}</p>
          <a className="noticias-enlace" href="https://aprendergratis.es/tag/nasa/">
            {texto.catalog} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="noticias-cuadricula">
          {cursosNoticias.map(({ image, url, source, ...traducciones }) => {
            const { title, summary } = traducciones[idioma];

            return (
              <article className="noticias-curso" key={url}>
                <img src={imagenes + image} alt="" loading="lazy" />
                <div className="noticias-curso-texto">
                  <small>{source}</small>
                  <h3>{title}</h3>
                  <p>{summary}</p>
                  <a className="noticias-enlace" href={url} aria-label={texto.courseLink + ' — ' + title}>
                    {texto.courseLink} <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="noticias-proximamente" aria-labelledby="noticias-proximamente-titulo">
        <h2 id="noticias-proximamente-titulo">{texto.upcoming}</h2>
      </section>
    </div>
  );
}
