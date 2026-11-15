import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home,
   Flag,
    MessageCircle,
     Newspaper,
      UserRound,
       Settings,
        Menu, X } from 'lucide-react';

export default function Header({ t, abrirAjustes }) {
  const [mobile, setMobile] = useState(false);
  const links = [
    ['/', t.home, Home],
    ['/misiones', t.missions, Flag],
    ['/foro', t.forum, MessageCircle],
    ['/noticias', t.news, Newspaper],
    ['/registro', t.account, UserRound],
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={() => setMobile(false)}>
          <img src={`${import.meta.env.BASE_URL}imagenes/logo.svg`} alt="Logo Nass"/>
          <span>Nass</span>
        </Link>
        <nav className={'nav ' + (mobile ? 'nav-open' : '')} aria-label="Navegación principal">
          {links.map(([url, label, Icon]) => (
            <NavLink key={url} to={url} end={url === '/'} onClick={() => setMobile(false)}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              <Icon size={17}/>{label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label={t.settings} title={t.settings} onClick={abrirAjustes}>
            <Settings size={23}/>
          </button>
          <button className="icon-button mobile-toggle" aria-label="Menú" onClick={() => setMobile(p => !p)}>
            {mobile ? <X/> : <Menu/>}
          </button>
        </div>
      </div>
    </header>
  );
}
