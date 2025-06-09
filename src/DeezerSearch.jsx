import React, { useState } from 'react';

export default function DeezerSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [playingUrl, setPlayingUrl] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      // Usando proxy para evitar problema de CORS, só para teste
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const apiUrl = `https://api.deezer.com/search?q=${encodeURIComponent(query)}`;
      const res = await fetch(proxyUrl + apiUrl);
      const data = await res.json();

      if (data && data.data) {
        setResults(data.data);
        setPlayingUrl(null);
      } else {
        setResults([]);
      }
    } catch (err) {
      console.error('Erro ao buscar Deezer:', err);
      setResults([]);
    }
  }

  return (
    <div style={{ maxWidth: 500, margin: '20px auto', textAlign: 'left' }}>
      <form onSubmit={handleSearch} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Digite o nome da música"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: '100%', padding: 10, fontSize: 16, boxSizing: 'border-box' }}
        />
        <button type="submit" style={{ marginTop: 10, padding: '10px 20px', fontSize: 16 }}>
          Buscar no Deezer
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {results.map((item) => (
          <li
  key={item.id}
  style={{
    marginBottom: 15,
    padding: 12,
    border: '1px solid #ddd',
    borderRadius: 6,
    cursor: 'pointer',
    backgroundColor: playingUrl === item.preview ? '#e0ffe0' : 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  }}
  onClick={() => setPlayingUrl(item.preview)}
>
  <div style={{ fontSize: 18, fontWeight: '700', color: '#222' }}>
    {item.title}
  </div>
  <div style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
    {item.artist.name}
  </div>
  {playingUrl === item.preview && (
    <audio
      src={item.preview}
      controls
      autoPlay
      style={{ marginTop: 10, width: '100%' }}
    />
  )}
</li>

        ))}
      </ul>
    </div>
  );
}
