const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = (env) => {
  // Production variable it's for default false in dev environment
  console.log('Goal: ', env.goal); // 'local'
  console.log('Production: ', env.production); // 'True'

  return {
    context: path.resolve(__dirname, 'src'), // Path for source files
    entry: {
      default: './index.js',
      mobile: './mobile.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'), // Path for out files
      filename: '[name]-main.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      // contentBase: './dist',
      // All changes will be watched from src directory and files inside src directory will be served on browser
      // Configuration to use hotModuleReplacement in dev mode
      contentBase: path.join(__dirname, 'src'), // Directory that will point the webpack server
      compress: true,
      port: 9000,
      watchContentBase: true, // Watch changes
      hot: true
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      "targets": "defaults"
                    }
                  ]
                ]
              }
            }
          },
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
      // Deprecated plugin after the V4
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'commons',        
      //   filename: 'commons.js'
      // }),
    ],
  };
};