import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from "svelte-preprocess"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        scss: {
          // Para que los componentes accedan a las variables SASS
          prependData: `@import 'src/styles/abstracts/_variables.scss';`
        },
      }),
      onwarn: (warning, handler) => {
        const { code, _frame } = warning
        // Omite los warning por clases no utilizadas (sucede mucho con Material)
        if (code === "css-unused-selector") return
        handler(warning)
      },
    })
  ],
  resolve: {
    alias: {
      $lib: path.resolve("src/lib"),
    },
  },
})
