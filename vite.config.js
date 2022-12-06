import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //origin: 'http://localhost:3000',
  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  plugins: [react()],
})
