import React, { useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  ChevronDown, Flag, FolderOpen, Home, Menu, MessageCircle,
  Newspaper, Settings, UserRound, X,
} from 'lucide-react';
import './Header.css';

export default function Header({ t, abrirAjustes }) {
  const [mobile, setMobile] = useState(false);
  const [foroAbierto, setForoAbierto] = useState(false);
  const botonForo = useRef(null);
  const { pathname } = useLocation();
  const foroActivo = pathname === '/foro' || pathname === '/noticias';
  const links = [
    ['/expedientes', t.records, FolderOpen],
    ['/misiones', t.missions, Flag],
    ['/registro', t.account, UserRound],
  ];

  function cerrarMenu() {
    setForoAbierto(false);
    setMobile(false);
  }

  function manejarTeclaForo(evento) {
    if (evento.key === 'Escape' && foroAbierto) {
      setForoAbierto(false);
      botonForo.current.focus();
    }
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={cerrarMenu}>
          <img src={`${import.meta.env.BASE_URL}imagenes/Logo_NASS.png`} alt="Logo Nass"/>
          <span>Nass</span>
        </Link>
        <nav className={'nav ' + (mobile ? 'nav-open' : '')} aria-label="Navegación principal">
          <NavLink to="/" end className="nav-link" onClick={cerrarMenu}>
            <Home size={17}/>{t.home}
          </NavLink>
          <div
            className="nav-foro"
            onBlur={evento => {
              if (!evento.currentTarget.contains(evento.relatedTarget)) {
                setForoAbierto(false);
              }
            }}
            onKeyDown={manejarTeclaForo}
          >
            <button
              ref={botonForo}
              type="button"
              className={foroActivo ? 'nav-link active' : 'nav-link'}
              aria-expanded={foroAbierto}
              aria-controls="nav-foro-opciones"
              onClick={() => setForoAbierto(abierto => !abierto)}
            >
              <MessageCircle size={17}/>{t.forum}<ChevronDown size={15}/>
            </button>
            <div id="nav-foro-opciones" className="nav-foro-opciones" hidden={!foroAbierto}>
              <NavLink to="/foro" className="nav-link" onClick={cerrarMenu}>
                <MessageCircle size={17}/>{t.forumTitle}
              </NavLink>
              <NavLink to="/noticias" className="nav-link" onClick={cerrarMenu}>
                <Newspaper size={17}/>{t.news}
              </NavLink>
            </div>
          </div>
          {links.map(([url, label, Icon]) => (
            <NavLink key={url} to={url} onClick={cerrarMenu}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <Icon size={17}/>{label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label={t.settings} title={t.settings} onClick={abrirAjustes}>
            <Settings size={23}/>
          </button>
          <button className="icon-button mobile-toggle" aria-label="Menú" aria-expanded={mobile} onClick={() => {
            setForoAbierto(false);
            setMobile(abierto => !abierto);
          }}>
            {mobile ? <X/> : <Menu/>}
          </button>
        </div>
      </div>
    </header>
  );
}
