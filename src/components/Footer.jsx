import React from 'react';

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div>
        <strong>Nass</strong>
        <p>Juan Caros Bellen © 2026</p>
      </div>
      <span>{t.footer}</span>
    </footer>
  );
}
