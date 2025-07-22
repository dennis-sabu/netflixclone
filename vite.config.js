import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(import.meta.env.API_KEY || ''),
    'process.env.AUTH_DOMAIN': JSON.stringify(import.meta.env.AUTH_DOMAIN || ''),
    'process.env.PROJECT_ID': JSON.stringify(import.meta.env.PROJECT_ID || ''),
    'process.env.STORAGE_BUCKET': JSON.stringify(import.meta.env.STORAGE_BUCKET || ''),
    'process.env.MESSAGING_SENDER_ID': JSON.stringify(import.meta.env.MESSAGING_SENDER_ID || ''),
    'process.env.APP_ID': JSON.stringify(import.meta.env.APP_ID || ''),
  }
})
