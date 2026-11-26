import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  ssr: {
    noExternal: ['react-helmet-async']
  },
  server: {
    port: 3000,
    open: true
  }
})
