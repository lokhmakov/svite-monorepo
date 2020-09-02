const svite = require(`svite`)
const path = require(`path`)
const fs = require(`fs`)

const CHAR_AT_SIGN = 64

/**
 * Check that import startsWith special character, dot or @
 */
function checkNotAbsolute(id) {
  return id[0].charCodeAt() <= CHAR_AT_SIGN
}

function checkModuleExists(name) {
  try {
    return require.resolve(name)
  } catch (err) {}
}

const check = (id) =>
  !(checkNotAbsolute(id) || checkModuleExists(id.split(`/`)[0]))

module.exports = {
  plugins: [svite()],
  optimizeDeps: {
    exclude: ['@evoke-me/state', '@evoke-me/ui'],
  },
  resolvers: [
    {
      alias(id) {
        if (check(id) && fs.existsSync(path.resolve(__dirname, `src/`, id))) {
          return `/src/${id}`
        }
      },
    },
  ],
}
