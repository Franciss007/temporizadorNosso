import React, { useState, useEffect } from 'react';

const playlist = [
  {
    id: 1,
    title: 'Song 1',
    artist: 'Artist 1',
    preview: 'https://cdns-preview-xyz/preview1.mp3',
    cover: 'https://cdns-preview-xyz/cover1.jpg',
  },
  // ... mais músicas
];

export default function FixedPlaylistPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Começa tocando a primeira música assim que abrir
  }, []);

  function handleEnded() {
    // Passa para a próxima música quando acabar a atual
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  }

  const current = playlist[currentIndex];

  return (
    <div style={{ maxWidth: 400, margin: 'auto', textAlign: 'center' }}>
      <img src={current.cover} alt={`Capa ${current.title}`} style={{ width: 200, borderRadius: 10 }} />
      <h3>{current.title}</h3>
      <p>{current.artist}</p>
      <audio
        src={current.preview}
        controls
        autoPlay
        onEnded={handleEnded}
        style={{ width: '100%' }}
      />
    </div>
  );
}
