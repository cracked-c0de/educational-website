import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: "/",
  server: {
    allowedHosts: ['vigorously-first-oriole.ngrok-free.app', "cracked-c0de.github.io"],
  }
})
