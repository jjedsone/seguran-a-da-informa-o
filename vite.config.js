import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.FIREBASE === '1' ? '/' : '/seguran-a-da-informa-o/',
})
