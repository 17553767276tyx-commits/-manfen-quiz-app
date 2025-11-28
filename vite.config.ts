import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import { VitePWA } from 'vite-plugin-pwa'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          devOptions: {
            enabled: true
          },
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
          manifest: {
            name: '满分上岸',
            short_name: '满分上岸',
            description: 'Ace Your Exam - 离线刷题助手',
            theme_color: '#ffffff',
            background_color: '#ffffff',
            display: 'standalone',
            orientation: 'portrait',
            start_url: '/', // 新增：启动路径
            scope: '/',     // 新增：作用域
            icons: [
              {
                src: 'https://api.iconify.design/lucide:book-open-check.svg?color=%236366f1&width=192&height=192',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any maskable'
              },
              {
                src: 'https://api.iconify.design/lucide:book-open-check.svg?color=%236366f1&width=512&height=512',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable'
              }
            ]
          },
          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg,json}'],
            runtimeCaching: [
              {
                urlPattern: /^https:\/\/api\.iconify\.design\/.*/,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'icon-cache',
                  expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 365
                  },
                  cacheableResponse: {
                    statuses: [0, 200]
                  }
                }
              }
            ]
          }
        })
      ],
    })