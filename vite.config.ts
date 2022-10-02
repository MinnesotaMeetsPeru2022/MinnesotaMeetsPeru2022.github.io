import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@/app': fileURLToPath(new URL('./src', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
