import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? '/Bamigos-kg-assessment/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@vendor": resolve(__dirname, "src/assets/vendor"),
      "@components": resolve(__dirname, "src/components"),
      "@canvasComp": resolve(__dirname, "src/pages/Home/canvasComponent"),
    }
  }
});