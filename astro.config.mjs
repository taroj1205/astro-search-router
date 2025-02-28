// @ts-check
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
    integrations: [
        AstroPWA({
            workbox: {
                maximumFileSizeToCacheInBytes: 3 * 1024 * 1024
            },
            registerType: "autoUpdate",
            manifest: {
                name: "Search Router",
                short_name: "SearchRouter",
                description: "A PWA for routing searches",
                start_url: "/",
                display: "standalone",
                background_color: "#ffffff",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "/favicon.svg",
                        sizes: "48x48 72x72 96x96 128x128 256x256",
                        type: "image/svg+xml",
                        purpose: "any"
                    },
                    {
                        src: "/clipboard.svg",
                        sizes: "192x192",
                        type: "image/svg+xml",
                        purpose: "maskable"
                    }
                ]
            }
        })
    ]
});
