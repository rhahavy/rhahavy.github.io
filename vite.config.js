import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// NOTE: If deploying to GitHub Pages under a repo subpath,
// change `base` to '/your-repo-name/'. For Vercel or a root domain, leave as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
