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
          src={`${import.meta.env.BASE_URL}imagenes/sonda-nass.png`}
          alt={lang === 'es' ? 'Sonda espacial sobre la Tierra' : 'Space probe above Earth'}
        />

        <Txt file="inicio" lang={lang} />
      </div>
    </section>
  );
}