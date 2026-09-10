import { existsSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import { defineConfig } from 'vite'

const isLaravel = existsSync(fileURLToPath(new URL('./artisan', import.meta.url)))

export default defineConfig({
  plugins: [
    ...(isLaravel
      ? laravel({
          input: ['resources/css/app.css', 'resources/js/app.ts'],
          refresh: true,
        })
      : []),
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
    },
  },
})
