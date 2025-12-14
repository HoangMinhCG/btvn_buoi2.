import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

// anh mở nhiều tab thành ra bị nhầm rồi =)))
//oke e
// giờ anh làm theo các bước đi xem được không