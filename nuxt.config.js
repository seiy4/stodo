const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  loading: {color: '#fff'},
  css: [],
  plugins: [
    {src: "~plugins/persistedstate", ssr: false}
  ],
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/pwa',
  ],
  workbox: {
    // dev: true
  },
  manifest: {
    name: 'STODO',
    short_name: 'STODO',
    title: 'STODO',
    'og:title': 'STODO',
    description: 'STODO',
    'og:description': 'STODO',
    lang: 'ja',
    theme_color: '#259f94',
    background_color: '#24130d',
  },
  build: {
    extend(config, ctx) {

    }
  }
}
