import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/LLCCAD/', // 👈 MUST MATCH YOUR REPO NAME EXACTLY
  plugins: [react()],
})
