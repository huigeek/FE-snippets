const { merge } = require('webpack-merge')
const baseConfig = require('./src/build/webpack.base.config')
const devConfig = require('./src/build/webapck.dev.config')
const proConfig = require('./src/build/webpack.pro.config')

const config = process.argv[2] === 'serve' ? devConfig : proConfig

module.exports = merge(baseConfig, config)
