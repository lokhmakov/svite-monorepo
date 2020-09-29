const svite = require(`svite`)
const sviteResolverAbsolute = require(`./svite--resolver--absolute`)
const sviteExcludeShared = require(`./svite--exclude-shared`)

module.exports = {
  plugins: [svite()],
  optimizeDeps: {
    exclude: [
      ...sviteExcludeShared([`../../packages`]),
      `fastify`,
      `fastify-static`,
      `@roxi/routify`,
    ],
  },
  resolvers: [sviteResolverAbsolute],
}
