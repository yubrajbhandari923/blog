import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    generate: {
        crawler: false
    },
    // modules: ['@nuxt/content'],
    // serverMiddleware: [
    //     '~/middleware/redirect.js'
    // ],
    css: [
        '~/assets/css/main.css',
    ],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    }
})
