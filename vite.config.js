const path = require('path')
const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
import tailwindcss from '@tailwindcss/vite'

/** @type {import('vite').UserConfig} */
module.exports = defineConfig({
  plugins: [react(),tailwindcss(),],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  server: {
    port: 5173,
    fs: { strict: false }
  },
  preview: {
    port: 5173
  }
})
