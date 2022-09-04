const path = require('path')

module.exports = {
  publicPath: '/idaproject/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [path.resolve(__dirname, './src/styles/style.sass')]
    }
  },
}