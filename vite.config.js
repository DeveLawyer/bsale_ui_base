import dotenv from 'dotenv'
dotenv.config()

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import path from 'path'

const { PORT = 3001 } = process.env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        scss: {
          // Para que los componentes accedan a las variables SASS
          prependData: `@import 'src/styles/abstracts/_variables.scss';`,
        },
      }),
      onwarn: (warning, handler) => {
        const { code } = warning
        // Omite los warning por clases no utilizadas (sucede mucho con Material)
        if (code === 'css-unused-selector') return
        handler(warning)
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      $lib: path.resolve('src/lib'),
    },
  },
})
