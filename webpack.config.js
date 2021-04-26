const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
      default: './index.js',
      mobile: './mobile.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]-main.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      // contentBase: './dist',
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
                // 'style-loader',
                MiniCssExtractPlugin.loader, 
                'css-loader',
                'sass-loader',
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'App 1.0',
          filename: 'admin.html',
          template: './body.html',
          hash: true,
          chunks: ['default']
        }),
        new HtmlWebpackPlugin({
          title: 'App 1.0 in mobile',
          filename: 'mobile.html',
          template: './mobile.html',
          hash: true,
          chunks: ['mobile']
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css',
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: 'commons',        
        //   filename: 'commons.js'
        // }),
      ],
  };