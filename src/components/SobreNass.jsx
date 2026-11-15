import Txt from './Txt';
import './SobreNass.css';

export default function SobreNass({ lang }) {
  return (
    <section className="section sobre-nass" aria-labelledby="titulo-sobre-nass">
      <h2 id="titulo-sobre-nass" className="sobre-nass-titulo">
        NASS – NEVER ABANDONED SPACE STORIES
      </h2>

      <div className="sobre-nass-columnas">
        <img
          className="sobre-nass-imagen"
          src={`${import.meta.env.BASE_URL}imagenes/Sonda espacial orbitando la Tierra.png`}
          alt={lang === 'es' ? 'Sonda espacial sobre la Tierra' : 'Space probe above Earth'}
        />

        <div className="sobre-nass-texto">
          <h3 className="sobre-nass-subtitulo">
            {lang === 'es'
              ? 'Explorar el universo también significa descubrir las historias que deja atrás'
              : 'Exploring the universe also means discovering the stories it leaves behind'}
          </h3>

          <Txt file="inicio" lang={lang} />
        </div>
      </div>
    </section>
  );
}