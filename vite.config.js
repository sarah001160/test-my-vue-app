import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'; // 正確導入

// https://vite.dev/config/
export default defineConfig({
  base: '/', // base這樣設定+vercel.json設定，vercel成功部屬
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
