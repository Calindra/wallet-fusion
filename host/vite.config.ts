import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'host',
    remotes: {
      remoteApp: 'http://localhost:3001/assets/remoteEntry.js',
    },
    shared: ['react', 'react-dom', '@emotion/react', '@emotion/styled', '@mui/icons-material', '@mui/material']
  })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
