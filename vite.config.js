import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',  // Establece la raíz del proyecto
  build: {
    outDir: 'dist',  // La carpeta de salida para la construcción
  },
  server: {
    port: 3000,  // Puerto del servidor de desarrollo
  },
});
