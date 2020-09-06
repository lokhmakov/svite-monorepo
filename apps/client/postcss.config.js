module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('postcss-preset-env')({stage: 1}),
  ],
}
