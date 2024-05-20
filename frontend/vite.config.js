import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Specify the desired port number
    proxy: {
      '/api': 'http://localhost:5000' // Proxy API requests to backend server
    }
  }
});
