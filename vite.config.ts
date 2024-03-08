import react from '@vitejs/plugin-react'

export default {
  base: '/',
  plugins: [react()],
  server: {
    port: 3001,
  },
  preview: {
    port: 8080,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
}
