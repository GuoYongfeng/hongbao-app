var base = require('./base.js')

module.exports = function (env) {

  let config = base()
  return Object.assign(config, {
    devtool: 'cheap-module-source-map',

    devServer: {
        // port: 7777,
        // host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        // publicPath: publicPath
    }
  })
}
