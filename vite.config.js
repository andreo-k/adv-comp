import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: './',
    // build: {
    //     outDir: 'dist',
    //     rollupOptions: {
    //         output: {
    //
    //             entryFileNames: '[name].[hash].js',
    //             chunkFileNames: '[name].[hash].js',
    //             assetFileNames: '[name].[hash][extname]',
    //         },
    //     },
    // },
})
