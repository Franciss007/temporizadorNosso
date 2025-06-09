import React, { useState } from 'react';

const playlist = [
    {
        id: 1,
        title: 'Logo Eu',
        artist: 'Jorge e Mateus',
        preview: '/musicas/Logo_eu.mp3',
        cover: '/musicas/logo-eu.jpg',
    },
    {
      id: 2,
      title: 'Os Anjos Cantam',
      artist: 'Jorge e Mateus',
      preview: '/musicas/Os_Anjos_Cantam.mp3',
      cover: '/musicas/Os_Anjos_Cantam.jpg',
    },
    {
        id: 3,
        title: 'Paredes',
    artist: 'Jorge e Mateus',
    preview: '/musicas/Paredes.mp3',
    cover: '/musicas/paredes.jpg',
  },
  {
    id: 4,
    title: 'Pra Sempre Com Você',
    artist: 'Jorge e Mateus',
    preview: '/musicas/pra_sempre_com_Você.mp3',
    cover: '/musicas/pra-sempre-com-voce.jpg',
  },
  {
    id: 5,
    title: 'O que é que tem',
    artist: 'Jorge e Mateus',
    preview: '/musicas/O_Que_É_Que_Tem.mp3',
    cover: '/musicas/o_que_e_que_tem.jpg',
  },
  
];

export default function FixedPlaylistPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = playlist[currentIndex];

  function handleEnded() {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 15 }}>
        <img
          src={current.cover}
          alt={`Capa de ${current.title}`}
          style={{ width: 100, borderRadius: 10, flexShrink: 0 }}
        />
        <div style={{ flexGrow: 1, textAlign: 'left' }}>
          <h3 style={{ margin: '0 0 5px 0' }}>{current.title}</h3>
          <p style={{ margin: 0, color: '#555' }}>{current.artist}</p>
          <audio
            src={current.preview}
            controls
            autoPlay
            onEnded={handleEnded}
            style={{ width: '100%', marginTop: 10 }}
          />
          <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between' }}>
            <button onClick={handlePrev} style={{ padding: '6px 12px', cursor: 'pointer' }}>
              ◀ Anterior
            </button>
            <button onClick={handleNext} style={{ padding: '6px 12px', cursor: 'pointer' }}>
              Próxima ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}