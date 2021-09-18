const path = require('path')
const aliases = require('./configs/aliases.json')

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: (() => {
      const result = {}
      aliases.forEach(alias => {
        result[`@${alias}`] = path.resolve(__dirname, `src/${alias}/`)
      })
      return result
    })(),
  },
}
