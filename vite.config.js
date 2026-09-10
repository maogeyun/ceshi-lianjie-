import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 本地开发用「/」；构建产物部署到 GitHub Pages 项目站时用仓库子路径
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/ceshi-lianjie-/' : '/',
}))
