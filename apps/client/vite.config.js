const svite = require("svite");
module.exports = {
  plugins: [svite()],
  optimizeDeps: {
    exclude: ["@svite-monorepo/screens"],
  },
};
