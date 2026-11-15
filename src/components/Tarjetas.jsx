import React from 'react';
import { Flag, MessageCircle, Newspaper, UserRound } from 'lucide-react';
import Tarjeta from './Tarjeta';

export default function Tarjetas({ t }) {
  const tarjetas = [
    { url: '/misiones', icono: <Flag/>, titulo: t.missions, descripcion: t.missionsShort, color: 'teal' },
    { url: '/foro', icono: <MessageCircle/>, titulo: t.forum, descripcion: t.forumShort, color: 'blue' },
    { url: '/noticias', icono: <Newspaper/>, titulo: t.news, descripcion: t.newsShort, color: 'gold' },
    { url: '/registro', icono: <UserRound/>, titulo: t.account, descripcion: t.loginShort, color: 'purple' },
  ];

  return (
    <section className="section">
      <div className="section-heading">
        <span className="eyebrow dark">NASS</span>
        <h2>{t.cards}</h2>
      </div>
      <div className="cards">
        {tarjetas.map(tarjeta => <Tarjeta key={tarjeta.url} {...tarjeta} leerMas={t.readMore}/>)}
      </div>
    </section>
  );
}
