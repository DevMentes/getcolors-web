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
    title: 'Desarrollo de software - GetColors',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: 'ybUsQcISx_foeQuzo-vNtzobakl0mOFkmtsOayXip04'
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
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
        type: 'text/javascript'
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
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
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
  }
}
