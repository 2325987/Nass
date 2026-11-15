import { useEffect, useState } from 'react';

export default function Txt({ file, lang }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    let live = true;
    setContent('');

    fetch(`${import.meta.env.BASE_URL}textos/${lang}/${file}.txt`)
      .then(response => {
        if (!response.ok) throw new Error();
        return response.text();
      })
      .then(text => {
        if (live) setContent(text);
      })
      .catch(() => {
        if (live) {
          setContent(lang === 'es'
            ? 'No se pudo cargar el archivo TXT.'
            : 'Unable to load TXT file.');
        }
      });

    return () => {
      live = false;
    };
  }, [file, lang]);

  return <div className="txt-content">{content}</div>;
}
