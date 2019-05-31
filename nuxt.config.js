const pkg = require('./package')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'og:site_name', property: 'og:site_name', content: 'STODO' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://stodo.netlify.com/' },
      { hid: 'og:title', property: 'og:title', content: 'STODO app' },
      { hid: 'og:description', property: 'og:description', content: 'STODO very simple todo app' },
      { hid: 'og:image', property: 'og:image', content: 'https://via.placeholder.com/150.jpg' },
      // { property: 'article:publisher', content: 'FacebookURL' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:site', content: '@Twitter' },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  loading: {color: '#fff'},
  plugins: [
    'plugins/persistedstate.client'
  ],
  modules: [
    'nuxt-buefy',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-141191223-1'
    }]
  ],
  workbox: {
    // dev: true
  },
  manifest: {
    name: 'STODO',
    short_name: 'STODO',
    title: 'STODO',
    'og:title': 'STODO',
    description: 'STODO very simple todo app',
    'og:description': 'STODO very simple todo app',
    lang: 'en',
    theme_color: '#259f94',
    background_color: '#24130d',
  },
  build: {
    extend(config, ctx) {
    }
  }
}
