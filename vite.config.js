import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ 
      registerType: 'autoUpdate',
      manifest: {
        name: "JZ",
        background_color: "#e2e2e2",
        lang: "zh-cn",
        icons: [{
          src: "avatar.png",
          sizes: "512x512",
          type: "image/png"
        }]
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  base: './'
})
