// Server-side proxy for NewsAPI. The Developer plan blocks direct browser
// requests (426 corsNotAllowed), so the browser calls this same-origin
// endpoint and the request to NewsAPI is made server-side.
export default async function handler(req, res) {
  const apiKey = process.env.VITE_NEWS_API;
  if (!apiKey) {
    res.status(500).json({ status: 'error', message: 'Missing VITE_NEWS_API' });
    return;
  }

  const params = new URLSearchParams(req.query || {});
  params.set('apiKey', apiKey);

  try {
    const upstream = await fetch(
      `https://newsapi.org/v2/top-headlines?${params.toString()}`
    );
    const data = await upstream.json();
    res.status(upstream.status).json(data);
  } catch (err) {
    res.status(502).json({ status: 'error', message: err.message });
  }
}
