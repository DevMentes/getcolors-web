module.exports = {
  server: {
    port: 80, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Desarrollo de software - DevMentes',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'lYX83jbxMB6a2CwrbbODzaJDDmIn7w38DusOKD8fcvE'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Somos un grupo de desarrolladores de software, donde analizamos y diseñamos mejoras y soluciones' +
          ' para dar potencia a tu negocio. Formamos y ayudamos a los desarrolladores para que puedan resolver' +
          ' sus problemas utilizando tendencias actuales de desarrollo y buenas prácticas.'
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/Vuelidate' }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          }
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  workbox: {
    offlineStrategy: 'OfflineFirst'
  },
  manifest: {
    name: 'Desarrollo de Software  - DevMentes',
    short_name: 'DevMentes',
    theme_color: '#6927ff',
    background_color: '#6927ff',
    display: 'standalone',
    scope: '/',
    start_url: '/'
  }
}
