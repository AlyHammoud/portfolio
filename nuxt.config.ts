// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['nuxt-swiper'],

    swiper: {
        styleLang: 'css',
        modules: '*',
    },

    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    plugins: [
        { src: "@/plugins/aos", ssr: false, mode: "client" }
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/css/main.scss" as *;'
                }
            }
        },
    },
})
