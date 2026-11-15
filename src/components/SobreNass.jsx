import { Lightbulb } from 'lucide-react';
import Txt from './Txt';
import './SobreNass.css';

export default function SobreNass({ lang }) {
  return (
    <section className="section sobre-nass" aria-labelledby="titulo-sobre-nass">
      <h2 id="titulo-sobre-nass" className="sobre-nass-titulo">
        NASS – NEVER ABANDONED SPACE STORIES
      </h2>

      <div className="sobre-nass-columnas">
        <div className="sobre-nass-recuadro" aria-hidden="true">
          <Lightbulb size={58} />
          <span>NASS</span>
        </div>

        <Txt file="inicio" lang={lang} />
      </div>
    </section>
  );
}
