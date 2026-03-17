import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react()]
  try {
    const { VitePWA } = await import('vite-plugin-pwa')
    plugins.push(VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
        ],
      },
      manifest: {
        name: 'Curso Segurança Cibernética',
        short_name: 'Segurança',
        theme_color: '#10b981',
        background_color: '#05080c',
        display: 'standalone',
      },
    }))
  } catch {
    // vite-plugin-pwa não instalado: use "npm install vite-plugin-pwa --save-dev --legacy-peer-deps" para PWA
  }
  return {
    plugins,
    // Base do app. Use FIREBASE=1 para base '/' (ex.: Firebase Hosting). Caso contrário usa subpath (ex.: Cursor preview, GitHub Pages).
    base: process.env.FIREBASE === '1' ? '/' : '/seguran-a-da-informa-o/',
  }
})
