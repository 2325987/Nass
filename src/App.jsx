import React, {useEffect,useState} from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import {Settings,Sun,Moon,X,MessageCircle,Newspaper,Flag,FolderOpen,Send,CheckCircle2,Globe,Type} from 'lucide-react';
import { recuperarSesion } from './baseLocal';
import Cuenta from './components/Cuenta';
import Foro from './components/Foro';
import Header from './components/Header';
import Footer from './components/Footer';
import Carrusel from './components/Carrusel';
import Tarjetas from './components/Tarjetas';
import SobreNass from './components/SobreNass';
import Txt from './components/Txt';
import MisionesNASA from './components/MisionesNASA';

const translations={
 es:{home:'Inicio',loading:'Cargando…',storageError:'No se pudo acceder a la base de datos del navegador. Intente de nuevo.',records:'Expedientes',noRecords:'Aún no hay expedientes publicados.',missions:'Seguimiento de misiones',forum:'Foro',news:'Noticias',account:'Registro / Ingreso',settings:'Ajustes',language:'Idioma',font:'Tamaño de letra',theme:'Apariencia',light:'Claro',dark:'Oscuro',suggest:'Caja de sugerencias',suggestHint:'Escriba una sugerencia para mejorar Nass...',send:'Enviar',saved:'Guardado en este navegador',welcome:'Bienvenidos a Nass',tagline:'Conectamos ideas, personas y nuevas posibilidades.',explore:'Explorar misiones',cards:'Descubre nuestras secciones',missionsShort:'Consulta tus actividades y marca tus avances.',forumShort:'Comparte ideas y conversa con la comunidad.',newsShort:'Lee avisos y novedades del proyecto.',loginShort:'Crea una cuenta o ingresa a tu espacio.',progress:'Tu progreso',addMission:'Nueva misión',missionPlaceholder:'Escriba una misión',add:'Agregar',done:'Completada',pending:'Pendiente',forumTitle:'Conversaciones',write:'Escriba un mensaje...',publish:'Publicar',forumNote:'Los mensajes se guardan en este navegador y no se comparten con otros visitantes.',newsTitle:'Últimas noticias',login:'Ingresar',register:'Registrarse',user:'Usuario',password:'Contraseña',enter:'Entrar',create:'Crear cuenta',logout:'Salir',logged:'Sesión iniciada como',accountNote:'Cuenta de demostración guardada en este navegador. Use una contraseña exclusiva para esta práctica.',invalid:'Revise el usuario y la contraseña.',exists:'Ese usuario ya existe.',required:'Complete los campos.',loginFirst:'Inicie sesión para publicar un mensaje.',banner1:'Un lugar para nuevas ideas',banner2:'Sigue cada una de tus misiones',banner3:'Comparte noticias y conversaciones',readMore:'Conocer más',welcomeGuest:'Tu espacio para participar',noMissions:'Todavía no hay misiones. Agregue una para comenzar.',noPosts:'Aún no hay mensajes. ¡Inicie la conversación!',footer:'Proyecto Nass · 2026',close:'Cerrar'},
 en:{home:'Home',loading:'Loading…',storageError:'Could not access the browser database. Try again.',records:'Case files',noRecords:'No case files have been published yet.',missions:'Mission tracking',forum:'Forum',news:'News',account:'Register / Sign in',settings:'Settings',language:'Language',font:'Font size',theme:'Appearance',light:'Light',dark:'Dark',suggest:'Suggestion box',suggestHint:'Write a suggestion to improve Nass...',send:'Send',saved:'Saved in this browser',welcome:'Welcome to Nass',tagline:'Connecting ideas, people, and new possibilities.',explore:'Explore missions',cards:'Discover our sections',missionsShort:'View your activities and track progress.',forumShort:'Share ideas and connect with the community.',newsShort:'Read updates and announcements.',loginShort:'Create an account or sign in.',progress:'Your progress',addMission:'New mission',missionPlaceholder:'Write a mission',add:'Add',done:'Completed',pending:'Pending',forumTitle:'Conversations',write:'Write a message...',publish:'Publish',forumNote:'Messages are saved in this browser and are not shared with other visitors.',newsTitle:'Latest news',login:'Sign in',register:'Register',user:'Username',password:'Password',enter:'Sign in',create:'Create account',logout:'Sign out',logged:'Signed in as',accountNote:'This demo account is stored in this browser. Use a password unique to this demo.',invalid:'Check your username and password.',exists:'That username already exists.',required:'Please fill in all fields.',loginFirst:'Sign in to post a message.',banner1:'A place for new ideas',banner2:'Track every mission',banner3:'Share news and conversations',readMore:'Learn more',welcomeGuest:'Your space to participate',noMissions:'No missions yet. Add one to get started.',noPosts:'No messages yet. Start the conversation!',footer:'Nass Project · 2026',close:'Close'}
};
const getSaved=(key,fallback)=>{try{return JSON.parse(localStorage.getItem('nass_'+key))??fallback}catch{return fallback}};
function useStored(key,initial){const [value,setValue]=useState(()=>getSaved(key,initial));useEffect(()=>{localStorage.setItem('nass_'+key,JSON.stringify(value))},[key,value]);return [value,setValue]}
function HomePage({ t, lang }) {
  return (
    <>
      <Carrusel t={t}/>
      <SobreNass lang={lang}/>
      <Tarjetas lang={lang}/>

      <div className="section">
        <p>
          {lang === 'es'
            ? 'Ve siempre más allá de la misión.'
            : 'Always look beyond the mission.'}
        </p>
      </div>
    </>
  );
}
function Missions({ t, lang }) {
  return (
    <div className="page section">
      <div className="page-title">
        <Flag />
        <h1>{t.missions}</h1>
      </div>
      <MisionesNASA lang={lang} />
    </div>
  );
}
function News({t,lang}){return <div className="page section"><div className="page-title"><Newspaper/><h1>{t.newsTitle}</h1></div><article className="panel"><span className="eyebrow dark">NASS · 2026</span><Txt file="noticias" lang={lang}/></article></div>}
function Expedientes({ t }) {
  return (
    <div className="page section">
      <div className="page-title"><FolderOpen/><h1>{t.records}</h1></div>
      <div className="panel"><p className="muted">{t.noRecords}</p></div>
    </div>
  );
}

export default function App(){const [lang,setLang]=useStored('lang','es');const [dark,setDark]=useStored('dark',false);const [font,setFont]=useStored('font',100);const [suggestions,setSuggestions]=useStored('suggestions',[]);const [usuario, setUsuario] = useState(null);
  const [cargandoSesion, setCargandoSesion] = useState(true);
  const [errorBase, setErrorBase] = useState('');
  useEffect(() => {
    let activo = true;
    recuperarSesion()
      .then(cuenta => { if (activo) setUsuario(cuenta); })
      .catch(() => { if (activo) setErrorBase('storageError'); })
      .finally(() => { if (activo) setCargandoSesion(false); });
    return () => { activo = false; };
  }, []);

  function actualizarUsuario(cuenta) {
    setUsuario(cuenta);
    setErrorBase('');
  }

  const [settings,setSettings]=useState(false);const [suggestion,setSuggestion]=useState('');const [sent,setSent]=useState(false);const t=translations[lang]||translations.es;useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dataset.theme=dark?'dark':'light';document.documentElement.style.fontSize=`${font}%`},[lang,dark,font]);function saveSuggestion(e){e.preventDefault();if(!suggestion.trim())return;setSuggestions(p=>[...p,{text:suggestion.trim(),date:new Date().toISOString()}]);setSuggestion('');setSent(true)}return <div className="site"><Header t={t} abrirAjustes={()=>setSettings(true)}/><main><Routes><Route path="/" element={<HomePage t={t} lang={lang}/>}/><Route path="/misiones" element={<Missions t={t} lang={lang}/>}/><Route path="/foro" element={<Foro t={t} lang={lang} usuario={usuario} actualizarUsuario={actualizarUsuario} cargandoSesion={cargandoSesion}/>}/><Route path="/expedientes" element={<Expedientes t={t}/>}/><Route path="/noticias" element={<News t={t} lang={lang}/>}/><Route path="/registro" element={<Cuenta t={t} usuario={usuario} actualizarUsuario={actualizarUsuario} cargando={cargandoSesion} errorBase={errorBase}/>}/><Route path="*" element={<div className="section page"><h1>404</h1><Link to="/">{t.home}</Link></div>}/></Routes></main><Footer t={t}/>{settings&&<div className="overlay" onMouseDown={e=>{if(e.target===e.currentTarget)setSettings(false)}}><aside className="settings" role="dialog" aria-modal="true" aria-label={t.settings}><div className="between"><h2><Settings size={22}/>{t.settings}</h2><button className="icon-button" aria-label={t.close} onClick={()=>setSettings(false)}><X/></button></div><div className="setting-field"><label><Globe size={19}/>{t.language}</label><select value={lang} onChange={e=>setLang(e.target.value)}><option value="es">Español</option><option value="en">English</option></select></div><div className="setting-field"><label><Type size={19}/>{t.font}: {font}%</label><input type="range" min="85" max="130" step="5" value={font} onChange={e=>setFont(Number(e.target.value))}/></div><div className="setting-field"><label>{dark?<Moon size={19}/>:<Sun size={19}/>} {t.theme}</label><div className="toggle-buttons"><button className={!dark?'selected':''} onClick={()=>setDark(false)}><Sun size={17}/>{t.light}</button><button className={dark?'selected':''} onClick={()=>setDark(true)}><Moon size={17}/>{t.dark}</button></div></div><form className="setting-field" onSubmit={saveSuggestion}><label><MessageCircle size={19}/>{t.suggest}</label><textarea rows="5" value={suggestion} onChange={e=>{setSuggestion(e.target.value);setSent(false)}} maxLength="1000" placeholder={t.suggestHint}/><button className="btn btn-primary"><Send size={16}/>{t.send}</button>{sent&&<p className="success"><CheckCircle2 size={16}/>{t.saved}</p>}</form></aside></div>}</div>}
