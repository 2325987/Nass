import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Send } from 'lucide-react';
import { listarMensajes, publicarMensaje } from '../baseLocal';

export default function Foro({ t, lang, usuario, actualizarUsuario, cargandoSesion }) {
  const [mensajes, setMensajes] = useState(null);
  const [borrador, setBorrador] = useState('');
  const [error, setError] = useState('');
  const [publicando, setPublicando] = useState(false);

  useEffect(() => {
    let activo = true;
    listarMensajes()
      .then(datos => { if (activo) setMensajes(datos); })
      .catch(() => { if (activo) setError('storageError'); });
    return () => { activo = false; };
  }, []);

  async function publicar(evento) {
    evento.preventDefault();
    const texto = borrador.trim();
    if (!usuario || !texto || publicando) return;

    setPublicando(true);
    setError('');
    try {
      const mensaje = await publicarMensaje(usuario, texto);
      if (!mensaje) {
        actualizarUsuario(null);
        return;
      }
      setMensajes(actuales => [mensaje, ...(actuales ?? [])]);
      setBorrador('');
    } catch {
      setError('storageError');
    } finally {
      setPublicando(false);
    }
  }

  return (
    <div className="page section">
      <div className="page-title"><MessageCircle/><h1>{t.forumTitle}</h1></div>
      <div className="panel">
        <p className="muted">{t.forumNote}</p>
        {cargandoSesion ? (
          <p role="status">{t.loading}</p>
        ) : usuario ? (
          <form onSubmit={publicar} className="stack">
            <textarea rows={4} maxLength={800} aria-label={t.write} value={borrador}
              onChange={e => setBorrador(e.target.value)} placeholder={t.write} required/>
            <button className="btn btn-primary align-self" disabled={publicando || !borrador.trim()}>
              <Send size={17}/>{t.publish}
            </button>
          </form>
        ) : (
          <p className="notice">{t.loginFirst} <Link to="/registro">{t.login}</Link></p>
        )}
        {error && <p className="error" role="alert">{t[error]}</p>}
      </div>
      <div className="posts">
        {mensajes?.length === 0 && <div className="panel muted">{t.noPosts}</div>}
        {mensajes?.map(mensaje => (
          <article className="panel" key={mensaje.id}>
            <div className="between">
              <strong>◉ {mensaje.autor}</strong>
              <small className="muted">
                {mensaje.fechaAnterior ?? new Date(mensaje.fecha).toLocaleDateString(lang)}
              </small>
            </div>
            <p className="post-text">{mensaje.texto}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
