const { merge } = require('webpack-merge')
const devConfig = require('./build/webpack.config.dev.js')
const prodConfig = require('./build/webpack.config.prod.js')
const baseConfig = require('./build/webpack.config.base.js')

const config = process.argv[2] === 'serve' ? devConfig : prodConfig

module.exports = merge(baseConfig, config)
