import React, { useEffect, useState } from 'react';

// Typt `text` letter per letter. De volledige tekst staat onzichtbaar klaar,
// zodat de layout niet verspringt, en schermlezers krijgen meteen de hele tekst.
export default function Typewriter({ text, speed = 70, delay = 0, cursor = false, className = '' }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    setDisplayed('');
    let i = 0;
    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, delay]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="invisible">{text}{cursor && '_'}</span>
      <span aria-hidden="true" className="absolute inset-0 whitespace-nowrap">
        {displayed}
        {cursor && <span className="cursor-blink">_</span>}
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
