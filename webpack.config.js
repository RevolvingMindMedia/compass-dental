module.exports = {
  entry: {
    app: './src/js/app.js',
    vendors: './src/js/vendors.js'
  },
  output: {
      path: __dirname + '/dist',
      filename: '[name].js',
      publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /.(png|jpg|jpeg|gif|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          },
          {
            loader: 'sass-loader',
            options: {}
          }
        ]
      }
    ]
  }
}

