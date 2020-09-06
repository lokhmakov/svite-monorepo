const svite = require(`svite`)
const sviteResolverAbsolute = require(`./svite--resolver--absolute`)
const sviteExcludeShared = require(`./svite--exclude-shared`)

module.exports = {
  plugins: [svite()],
  optimizeDeps: {
    exclude: sviteExcludeShared([`../../packages`]),
  },
  resolvers: [sviteResolverAbsolute],
}
