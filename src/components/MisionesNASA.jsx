import { useState } from 'react';
import { buscarMisiones, etapasMisionesNASA } from './etapasMisionesNASA';
import { misionesNASA } from './datosMisionesNASA';
import './MisionesNASA.css';

const idioma = {
  es: {
    titulo: 'Avance de las misiones NASA',
    buscar: 'Buscar una misión',
    ejemplo: 'Ejemplo: Artemis II o Dragonfly',
    elegir: 'Misión',
    ninguna: 'No se encontraron misiones con ese nombre.',
    recorrer: 'Deslice la barra para ver los avances y las etapas previstas.',
    fase: 'Fase actual',
    etiquetaEtapa: 'Etapa de la misión',
    etapa: 'Etapa',
    de: 'de',
    realizada: 'Realizada',
    actual: 'Actual',
    futura: 'Prevista',
    artemis: 'Programa Artemis',
    otras: 'Otras misiones de la NASA',
    completada: 'Completada',
    preparacion: 'En preparación',
    prevista: 'Planificada',
    activa: 'En curso',
    foto: 'Foto',
    ilustracion: 'Ilustración',
    avance: 'Avance',
    fuente: 'Ver en NASA',
    trayectoria: 'Ver trayectoria de Artemis II',
    altMapa: 'Infografía de la NASA sobre el despegue, sobrevuelo lunar y retorno de Artemis II',
    mapa: 'Infografía en español · NASA',
  },
  en: {
    titulo: 'NASA mission progress',
    buscar: 'Search for a mission',
    ejemplo: 'Example: Artemis II or Dragonfly',
    elegir: 'Mission',
    ninguna: 'No missions match that name.',
    recorrer: 'Move the slider to see completed and planned stages.',
    fase: 'Current phase',
    etiquetaEtapa: 'Mission stage',
    etapa: 'Stage',
    de: 'of',
    realizada: 'Completed',
    actual: 'Current',
    futura: 'Planned',
    artemis: 'Artemis Program',
    otras: 'Other NASA missions',
    completada: 'Completed',
    preparacion: 'In preparation',
    prevista: 'Planned',
    activa: 'Active',
    foto: 'Photo',
    ilustracion: 'Illustration',
    avance: 'Milestone',
    fuente: 'View on NASA',
    trayectoria: 'View the Artemis II flight path',
    altMapa: 'NASA infographic showing the Artemis II launch, lunar flyby, and return',
    mapa: 'Spanish-language infographic · NASA',
  },
};

const imagenes = import.meta.env.BASE_URL + 'imagenes/misiones/';

function TarjetaMision({ mision, lang, texto }) {
  const datos = mision[lang] || mision.es;

  return (
    <article className="panel nasa-mision">
      <figure className="nasa-mision-imagen">
        <img src={imagenes + mision.id + '.webp'} alt={datos.alt} loading="lazy"
             className={mision.id === 'dragonfly' ? 'nasa-imagen-dragonfly' : undefined} />
        <figcaption>{texto[mision.tipoImagen]} · {mision.credito || 'NASA'}</figcaption>
      </figure>
      <div className="nasa-mision-contenido">
        <span className={'nasa-mision-estado nasa-estado-' + mision.estado}>
          {texto[mision.estado]}
        </span>
        <h3>{mision.nombre}</h3>
        <p className="nasa-mision-fecha">{datos.fecha}</p>
        <p>{datos.resumen}</p>
        <p><strong>{texto.avance}.</strong> {datos.avance}</p>
        {mision.id === 'artemis-ii' && (
          <details className="nasa-mision-trayectoria">
            <summary>{texto.trayectoria}</summary>
            <a href={imagenes + 'trayectoria-artemis-ii.webp'} target="_blank" rel="noreferrer">
              <img src={imagenes + 'trayectoria-artemis-ii.webp'} alt={texto.altMapa} loading="lazy" />
              <span>{texto.mapa}</span>
            </a>
          </details>
        )}
        <a className="nasa-mision-fuente" href={mision.fuente} target="_blank" rel="noreferrer"
           aria-label={texto.fuente + ' · ' + mision.nombre}>
          {texto.fuente} ↗
        </a>
      </div>
    </article>
  );
}

function BarraEtapas({ mision, lang, texto }) {
  const ruta = etapasMisionesNASA[mision.id];
  const etapas = ruta[lang] || ruta.es;
  const [indice, setIndice] = useState(ruta.actual);
  const [nombre, detalle] = etapas[indice];
  const estadoEtapa = indice > ruta.actual ? texto.futura
    : indice === ruta.actual && mision.estado !== 'completada' ? texto.actual
    : texto.realizada;

  return (
    <div className="nasa-avance-etapas">
      <p className="nasa-fase-actual">
        <strong>{texto.fase}.</strong> {etapas[ruta.actual][0]} · {texto[mision.estado]}
      </p>
      <p id="nasa-barra-ayuda">{texto.recorrer}</p>
      <label htmlFor="nasa-barra-etapas">{texto.etiquetaEtapa}</label>
      <input
        id="nasa-barra-etapas"
        type="range"
        min="0"
        max={etapas.length - 1}
        step="1"
        value={indice}
        aria-describedby="nasa-barra-ayuda"
        aria-valuetext={nombre + ' · ' + estadoEtapa}
        onChange={evento => setIndice(Number(evento.target.value))}
      />
      <div className="nasa-avance-detalle" aria-live="polite">
        <span className="nasa-mision-estado">
          {texto.etapa} {indice + 1} {texto.de} {etapas.length} · {estadoEtapa}
        </span>
        <h3>{nombre}</h3>
        <p>{detalle}</p>
      </div>
    </div>
  );
}

export default function MisionesNASA({ lang }) {
  const texto = idioma[lang] || idioma.es;
  const [consulta, setConsulta] = useState('');
  const [idElegido, setIdElegido] = useState('');
  const resultados = buscarMisiones(misionesNASA, consulta);
  const mision = resultados.find(item => item.id === idElegido) || resultados[0];
  const grupos = [
    { id: 'artemis', misiones: resultados.filter(mision => mision.id.startsWith('artemis-')) },
    { id: 'otras', misiones: resultados.filter(mision => !mision.id.startsWith('artemis-')) },
  ];

  return (
    <>
      <section className="panel nasa-avance" aria-labelledby="nasa-avance-titulo">
        <h2 id="nasa-avance-titulo">{texto.titulo}</h2>
        <label htmlFor="nasa-buscar">{texto.buscar}</label>
        <input
          id="nasa-buscar"
          type="search"
          value={consulta}
          placeholder={texto.ejemplo}
          onChange={evento => {
            setConsulta(evento.target.value);
            setIdElegido('');
          }}
        />
        {mision ? (
          <>
            <label htmlFor="nasa-elegir">{texto.elegir}</label>
            <select id="nasa-elegir" value={mision.id} onChange={evento => setIdElegido(evento.target.value)}>
              {resultados.map(item => <option key={item.id} value={item.id}>{item.nombre}</option>)}
            </select>
            <BarraEtapas key={mision.id} mision={mision} lang={lang} texto={texto} />
          </>
        ) : <p role="status">{texto.ninguna}</p>}
      </section>
      {grupos.filter(grupo => grupo.misiones.length > 0).map(grupo => (
        <section className="nasa-misiones" key={grupo.id} aria-labelledby={'nasa-' + grupo.id}>
          <h2 id={'nasa-' + grupo.id}>{texto[grupo.id]}</h2>
          <div className="nasa-misiones-grid">
            {grupo.misiones.map(item => (
              <TarjetaMision key={item.id} mision={item} lang={lang} texto={texto} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
