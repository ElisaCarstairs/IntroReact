import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Asegúrate de que `base` coincida con la ruta de GitHub Pages
export default defineConfig({
  base: '/IntroReact/Clase2.1/estado_manejo/',
  plugins: [react()],
});
