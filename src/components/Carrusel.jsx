import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  { image: 'banner1.svg', key: 'banner1' },
  { image: 'banner2.svg', key: 'banner2' },
  { image: 'banner3.svg', key: 'banner3' },
];

export default function Carrusel({ t }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(i => (i + 1) % banners.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[slide];
  const backgroundImage = `linear-gradient(90deg,rgba(8,35,55,.90),rgba(8,35,55,.28)),url('${import.meta.env.BASE_URL}imagenes/${banner.image}')`;

  return (
    <section className="hero" style={{ backgroundImage }}>
      <div className="hero-content">
        <span className="eyebrow">NASS · 2026</span>
        <h1>{t[banner.key]}</h1>
        <p>{t.tagline}</p>
        <Link className="btn btn-accent" to="/misiones">{t.explore} <ChevronRight size={18}/></Link>
      </div>
      <div className="hero-controls">
        <button aria-label="Anterior" onClick={() => setSlide((slide + banners.length - 1) % banners.length)}>
          <ChevronLeft/>
        </button>
        {banners.map((item, i) => (
          <button key={item.key} aria-label={`Banner ${i + 1}`} className={'dot ' + (slide === i ? 'active' : '')} onClick={() => setSlide(i)}/>
        ))}
        <button aria-label="Siguiente" onClick={() => setSlide((slide + 1) % banners.length)}>
          <ChevronRight/>
        </button>
      </div>
    </section>
  );
}
