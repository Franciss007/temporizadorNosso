// /api/deezer-search.js
export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    res.status(400).json({ error: 'Query param "q" is required' });
    return;
  }

  try {
    const response = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(q)}`);
    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch from Deezer API' });
      return;
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
