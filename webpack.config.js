var webpack = require('webpack');
module.exports = {
  entry: './src/js/app.js',
  output: {
      path: __dirname + '/dist',
      filename: 'js/app.js',
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
			loader: 'postcss-loader', // Run post css actions
			options: {
			  plugins: function () { // post css plugins, can be exported to postcss.config.js
				return [
				  require('precss'),
				  require('autoprefixer')
				];
			  }
			}
		  },
          {
            loader: 'sass-loader',
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
}

