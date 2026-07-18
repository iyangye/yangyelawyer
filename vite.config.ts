import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // 使用相对路径，同时兼容自定义域名（根路径）和 github.io/yangyelawyer/（子路径）
  base: './',
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
