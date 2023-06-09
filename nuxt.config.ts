// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Community Ecology"
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        'nuxt-gtag'
    ],
    css: [
        '@/assets/styles.scss',
    ],
    gtag: {
        id: 'G-QNLZ5NY7HH'
    }
})
