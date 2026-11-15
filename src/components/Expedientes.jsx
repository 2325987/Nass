import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, FolderOpen, Search } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { expedienteEagle } from './expedienteEagle';
import { expedienteLRV } from './expedienteLRV';
import { expedienteOpportunity } from './expedienteOpportunity';
import { nivelesVoyager } from './nivelesVoyager';
import { recursosVoyager } from './recursosVoyager';
import './Expedientes.css';

const temas = [
  { id: 'tierra', icono: '🌍' },
  { id: 'luna', icono: '🌙' },
  { id: 'marte' },
  { id: 'estrella', icono: '⭐' },
];

const expedientes = [
  {
    id: 'voyager-1',
    nombre: 'Voyager 1',
    temas: ['estrella'],
    imagen: recursosVoyager[0].imagen,
    recursos: recursosVoyager,
    niveles: nivelesVoyager,
    es: {
      resumen: 'Sonda de la NASA lanzada el 5 de septiembre de 1977 para explorar Júpiter y Saturno. Hoy viaja por el espacio interestelar.',
      avance: 'Voyager 1 observó los planetas, sus lunas y sus anillos. El 25 de agosto de 2012 cruzó la heliopausa y se convirtió en el primer objeto construido por el ser humano en entrar al espacio interestelar.',
      alt: recursosVoyager[0].es.alt,
    },
    en: {
      resumen: 'NASA probe launched on September 5, 1977, to explore Jupiter and Saturn. It now travels through interstellar space.',
      avance: 'Voyager 1 observed the planets, their moons, and their rings. On August 25, 2012, it crossed the heliopause and became the first human-made object to enter interstellar space.',
      alt: recursosVoyager[0].en.alt,
    },
  },
  expedienteLRV,
  { ...expedienteEagle, temas: [...new Set([...expedienteEagle.temas, 'tierra'])] },
  expedienteOpportunity,
];

function DibujoTema({ tema }) {
  return tema.id === 'marte'
    ? <span className="expediente-dibujo-marte" aria-hidden="true" />
    : <span className="expediente-dibujo-tema" aria-hidden="true">{tema.icono}</span>;
}

const textos = {
  es: {
    buscar: 'Buscar expedientes',
    filtrar: 'Buscar por tema',
    temas: { tierra: 'Tierra', luna: 'Luna', marte: 'Marte', estrella: 'Estrella' },
    vacio: 'No se encontraron expedientes.',
    ver: 'Ver más',
    volver: 'Volver a expedientes',
    nivel: 'Nivel',
    recursos: 'Recursos para seguir explorando',
    niveles: ['Resumen', 'Exploración y avances'],
    nivelesLectura: ['Rápido', 'Básico'],
    estados: { completada: 'Completada', preparacion: 'En preparación', prevista: 'Prevista', activa: 'Activa' },
  },
  en: {
    buscar: 'Search case files',
    filtrar: 'Search by topic',
    temas: { tierra: 'Earth', luna: 'Moon', marte: 'Mars', estrella: 'Star' },
    vacio: 'No case files found.',
    ver: 'See more',
    volver: 'Back to case files',
    nivel: 'Level',
    recursos: 'Resources to keep exploring',
    niveles: ['Overview', 'Exploration and progress'],
    nivelesLectura: ['Quick', 'Basic'],
    estados: { completada: 'Completed', preparacion: 'In preparation', prevista: 'Planned', activa: 'Active' },
  },
};

const normalizar = texto => texto.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

function Definiciones({ entradas }) {
  return (
    <dl className="expediente-definiciones">
      {entradas.map(([termino, definicion]) => (
        <div key={termino}>
          <dt>{termino}</dt>
          <dd>{Array.isArray(definicion) ? (
            <ul>{definicion.map(punto => <li key={punto}>{punto}</li>)}</ul>
          ) : definicion}</dd>
        </div>
      ))}
    </dl>
  );
}

function LecturaExpediente({ apartados }) {
  return (
    <div className="expediente-lectura">
      {apartados.map(({ titulo, introduccion, parrafos, listas, definiciones }, indice) => (
        <section key={titulo}>
          <h3>{indice + 1}. {titulo}</h3>
          {introduccion && <p>{introduccion}</p>}
          {listas?.map(lista => (
            <div key={lista.titulo}>
              {lista.titulo && <h4>{lista.titulo}</h4>}
              {lista.ordenada ? (
                <ol>{lista.puntos.map(punto => <li key={punto}>{punto}</li>)}</ol>
              ) : (
                <ul>{lista.puntos.map(punto => <li key={punto}>{punto}</li>)}</ul>
              )}
            </div>
          ))}
          {parrafos?.map(parrafo => <p key={parrafo}>{parrafo}</p>)}
          {definiciones && <Definiciones entradas={definiciones} />}
        </section>
      ))}
    </div>
  );
}

function DetalleExpediente({ expediente, idioma, texto }) {
  const ficha = expediente[idioma];
  const niveles = expediente.niveles?.[idioma];
  const titulos = niveles ? texto.nivelesLectura : texto.niveles;
  const contenido = [
    niveles ? <Definiciones entradas={niveles.ficha} /> : <p>{ficha.resumen}</p>,
    niveles ? (
      <>
        {niveles.publico && <p>{niveles.publico}</p>}
        <LecturaExpediente apartados={niveles.lectura} />
      </>
    ) : <p>{ficha.avance}</p>,
  ];

  return (
    <div className="page section expedientes">
      <Link className="expedientes-volver" to="/expedientes"><ArrowLeft size={18} />{texto.volver}</Link>
      <div className="page-title"><FolderOpen /><h1>{ficha.nombre ?? expediente.nombre}</h1></div>
      <div className="expedientes-niveles">
        {contenido.map((nivel, indice) => (
          <section className="panel expediente-nivel" key={indice}>
            <h2>{texto.nivel} {indice + 1}{titulos[indice] && ` · ${titulos[indice]}`}</h2>
            {nivel}
          </section>
        ))}
        {expediente.recursos && (
          <section className="panel expediente-nivel">
            <h2>{texto.nivel} {contenido.length + 1} · {ficha.tituloRecursos ?? texto.recursos}</h2>
            {ficha.subtituloRecursos && <p>{ficha.subtituloRecursos}</p>}
            <div className="expedientes-tarjetas">
              {expediente.recursos.map(recurso => (
                <article className="panel expediente-tarjeta" key={recurso.id}>
                  {recurso.imagen && <img src={recurso.imagen} alt={recurso[idioma].alt} loading="lazy" />}
                  <div className="expediente-contenido">
                    <h3>{recurso.nombre}</h3>
                    <p>{recurso[idioma].resumen}</p>
                    <a className="btn btn-primary" href={recurso.enlace} target="_blank" rel="noopener noreferrer"
                      aria-label={`${texto.ver} · ${recurso.nombre}`}>
                      {texto.ver}<ArrowRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default function Expedientes({ t, lang }) {
  const [busqueda, setBusqueda] = useState('');
  const [temaActivo, setTemaActivo] = useState('');
  const { expedienteId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [expedienteId]);
  const idioma = lang === 'en' ? 'en' : 'es';
  const texto = textos[idioma];

  if (expedienteId) {
    const expediente = expedientes.find(mision => mision.id === expedienteId);
    return expediente ? <DetalleExpediente expediente={expediente} idioma={idioma} texto={texto} /> : (
      <div className="page section expedientes">
        <p>{texto.vacio}</p>
        <Link className="expedientes-volver" to="/expedientes"><ArrowLeft size={18} />{texto.volver}</Link>
      </div>
    );
  }

  const consulta = normalizar(busqueda.trim());
  const resultados = expedientes.filter(mision =>
    (!temaActivo || mision.temas.includes(temaActivo)) &&
    normalizar([
      mision[idioma].nombre ?? mision.nombre,
      mision[idioma].resumen,
      ...mision.temas.map(tema => texto.temas[tema]),
    ].join(' ')).includes(consulta)
  );

  return (
    <div className="page section expedientes">
      <div className="page-title"><FolderOpen /><h1>{t.records}</h1></div>
      <div className="expedientes-filtros">
        <label className="expedientes-busqueda">
          <Search size={20} aria-hidden="true" />
          <input
            type="search"
            aria-label={texto.buscar}
            placeholder={texto.buscar}
            value={busqueda}
            onChange={evento => setBusqueda(evento.target.value)}
          />
        </label>
        <div className="expedientes-temas" role="group" aria-label={texto.filtrar}>
          {temas.map(tema => (
            <button
              className="expediente-tema"
              key={tema.id}
              type="button"
              aria-pressed={temaActivo === tema.id}
              onClick={() => setTemaActivo(actual => actual === tema.id ? '' : tema.id)}
            >
              <span className="expediente-tema-circulo"><DibujoTema tema={tema} /></span>
              {texto.temas[tema.id]}
            </button>
          ))}
        </div>
      </div>
      {resultados.length === 0 && <p className="muted" role="status">{texto.vacio}</p>}
      <div className="expedientes-tarjetas">
        {resultados.map(mision => (
          <article className="panel expediente-tarjeta" key={mision.id}>
            {mision.imagen ? (
              <img src={mision.imagen} alt={mision[idioma].alt} />
            ) : mision.foto ? (
              <img src={`${import.meta.env.BASE_URL}imagenes/misiones/${mision.id}.webp`} alt={mision[idioma].alt} />
            ) : (
              <div className="expediente-ilustracion" aria-hidden="true"><DibujoTema tema={temas.find(tema => tema.id === mision.temas[0])} /></div>
            )}
            <div className="expediente-contenido">
              {mision.estado && <span className="expediente-estado">{texto.estados[mision.estado]}</span>}
              <h2>{mision[idioma].nombre ?? mision.nombre}</h2>
              <p>{mision[idioma].resumen}</p>
              <Link className="btn btn-primary" to={`/expedientes/${mision.id}`} aria-label={`${texto.ver} · ${mision[idioma].nombre ?? mision.nombre}`}>
                {texto.ver}<ArrowRight size={17} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
