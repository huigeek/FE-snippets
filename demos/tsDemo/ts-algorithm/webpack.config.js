const path = require('path')
module.exports = {
  entry: path.join(__dirname, 'src', 'SingleLinkedList.ts'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}