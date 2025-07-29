// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,
  modules: ['@nuxt/content', 'vuetify-nuxt-module'],
  vuetify: {
    vuetifyOptions: 'vuetify.config.ts'
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: 'logo.png' }
      ],
      title: 'Home Massage Da Nang',
      meta: [
        { name: 'description', content: 'Chuyên cung cấp dịch vụ massage tại nhà Đà Nẵng. Thư giãn, trị liệu, phục vụ tận nơi.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Home Massage Da Nang' },
        { property: 'og:description', content: 'Chuyên cung cấp dịch vụ massage tại nhà Đà Nẵng.' },
        { property: 'og:image', content: '/images/home-massage.avif' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  }
})