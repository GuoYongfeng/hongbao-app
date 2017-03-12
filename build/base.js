module.exports = function() {
  return {
    entry: {
      'polyfills': './src/polyfills.ts',
      'vendor': './src/vendor.ts',
      'main': './src/main.ts'
    },
    output: {
      path: path.join(__dirname, '/../dist/assets'),
      filename: '[name].bundle.js',
      publicPath: publicPath,
      sourceMapFilename: '[name].map'
    },
    resolve: {
      extensions: ['', '.ts', '.js', '.json'],
      modules: [path.join(__dirname, 'src'), 'node_modules']
    },
    module: {
      loaders: [{
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader'
        ],
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
      new ForkCheckerPlugin(),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunksSortMode: 'dependency'
      })
    ],
  };
}
