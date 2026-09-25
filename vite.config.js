import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      proxy: {
        // NewsAPI's Developer plan rejects direct browser requests (426 corsNotAllowed).
        // Proxy through the dev server so the request is made server-side, avoiding CORS.
        // The apiKey is injected here so it is never exposed to the browser.
        '/api/news': {
          target: 'https://newsapi.org',
          changeOrigin: true,
          rewrite: (path) => {
            const query = path.includes('?') ? path.slice(path.indexOf('?') + 1) : ''
            const params = new URLSearchParams(query)
            params.set('apiKey', env.VITE_NEWS_API || '')
            return `/v2/top-headlines?${params.toString()}`
          },
        },
      },
    },
    test: {
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
    },
  }
})
