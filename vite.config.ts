import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/yangyelawyer/',
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: mode === 'development'
          ? ['react-dev-locator']
          : [],
      },
    }),
    tsconfigPaths()
  ],
}))
