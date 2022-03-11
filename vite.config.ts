import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify from '@vuetify/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Vuetify({
      autoImport: true
    }),
  ],
})
