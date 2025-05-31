import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  build: {
    outDir: "docs", // instead of dist
  },
  plugins: [react()],
})

