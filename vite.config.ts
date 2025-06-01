import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/**/*.vue', 'src/**/*.ts'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(/src\//, ''),
        content
      })
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Modern3DIconsVue',
      fileName: (format) => `modern-3d-icons-vue.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  publicDir: 'src/svg'
}) 