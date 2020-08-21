const svite = require('svite')
module.exports = {
  plugins: [svite()],
  optimizeDeps: {
    exclude: ['@evoke-me/state', '@evoke-me/ui'],
  },
}
