var path = require('path')
var getEntry = require('./get-entry.js')

module.exports = function() {

  let config = {
    entry: getEntry.entrys,
    output: {
      path: path.join(__dirname, '/../public'),
      filename: "[name]/index.js",
      // publicPath: '/../public'),
      sourceMapFilename: '[name].map'
    },
    resolve: {
      // extensions: ['.js', '.json'],
      // modules: [path.join(__dirname, '../node_modules')]
      moduleExtensions: ['node_modules', path.join(__dirname, '../node_modules')],
  extensions: ['.web.js', '.js', '.json'],
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: "babel-loader",
        exclude: [/\.(spec|e2e)\.ts$/]
      }, {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader'
      }, {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }],
    },
    plugins: [
      // new ForkCheckerPlugin(),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: ['polyfills', 'vendor'].reverse()
      // })
    ]
  };

  config.plugins.push(getEntry.setMultiLangTemplates())
  return config
}
