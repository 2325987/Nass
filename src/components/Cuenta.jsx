import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole, LogOut, UserRound } from 'lucide-react';
import { cerrarSesion, iniciarSesion, registrarUsuario } from '../baseLocal';

export default function Cuenta({ t, usuario, actualizarUsuario, cargando, errorBase }) {
  const [registro, setRegistro] = useState(false);
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const [procesando, setProcesando] = useState(false);
  const navigate = useNavigate();

  async function enviar(evento) {
    evento.preventDefault();
    if (procesando || cargando) return;
    if (!nombre.trim() || !contraseña) {
      setError('required');
      return;
    }

    setProcesando(true);
    setError('');
    try {
      const autenticar = registro ? registrarUsuario : iniciarSesion;
      const cuenta = await autenticar(nombre, contraseña);
      if (!cuenta) {
        setError(registro ? 'exists' : 'invalid');
        return;
      }
      actualizarUsuario(cuenta);
      navigate('/foro');
    } catch {
      setError('storageError');
    } finally {
      setProcesando(false);
    }
  }

  async function salir() {
    setProcesando(true);
    setError('');
    try {
      await cerrarSesion();
      actualizarUsuario(null);
    } catch {
      setError('storageError');
    } finally {
      setProcesando(false);
    }
  }

  function cambiarModo(nuevoModo) {
    setRegistro(nuevoModo);
    setError('');
  }

  return (
    <div className="page section">
      <div className="page-title"><UserRound/><h1>{t.account}</h1></div>
      <div className="panel account-panel">
        {cargando ? (
          <p role="status">{t.loading}</p>
        ) : usuario ? (
          <>
            <p>{t.logged} <strong>{usuario}</strong></p>
            <button type="button" className="btn btn-primary" disabled={procesando} onClick={salir}>
              <LogOut size={18}/>{t.logout}
            </button>
          </>
        ) : (
          <>
            <div className="tabs">
              <button type="button" className={!registro ? 'selected' : ''} disabled={procesando}
                onClick={() => cambiarModo(false)}>{t.login}</button>
              <button type="button" className={registro ? 'selected' : ''} disabled={procesando}
                onClick={() => cambiarModo(true)}>{t.register}</button>
            </div>
            <form onSubmit={enviar} className="stack">
              <label>
                {t.user}
                <input value={nombre} onChange={e => setNombre(e.target.value)}
                  autoComplete="username" maxLength={40} disabled={procesando} required/>
              </label>
              <label>
                {t.password}
                <input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)}
                  autoComplete={registro ? 'new-password' : 'current-password'} disabled={procesando} required/>
              </label>
              <button className="btn btn-primary" disabled={procesando}>
                {procesando ? t.loading : registro ? t.create : t.enter}
              </button>
            </form>
          </>
        )}
        {(error || errorBase) && <p className="error" role="alert">{t[error || errorBase]}</p>}
        <p className="notice small-note"><LockKeyhole size={17}/>{t.accountNote}</p>
      </div>
    </div>
  );
}
