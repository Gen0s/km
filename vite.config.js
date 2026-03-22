import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/portfolio/' to your actual GitHub repo name, e.g. '/my-portfolio/'
// If deploying to a custom domain, set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/https://github.com/Gen0s/km/',
})
