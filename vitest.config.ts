import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const alias = { '~': fileURLToPath(new URL('./app', import.meta.url)) }

export default defineConfig({
  plugins: [vue()],
  resolve: { alias },
  test: {
    projects: [
      {
        // Pure TypeScript: functions, composables, validators
        test: {
          name: 'unit',
          environment: 'node',
          include: ['tests/*.test.ts'],
        },
      },
      {
        // Component interaction tests requiring a DOM
        plugins: [vue()],
        resolve: { alias },
        test: {
          name: 'component',
          environment: 'happy-dom',
          include: ['tests/component/**/*.test.ts'],
        },
      },
    ],
  },
})
