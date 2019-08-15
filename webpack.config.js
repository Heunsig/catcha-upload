const path = require('path')
const pjson = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const isProduction = process.env.ENV === 'production' ? true : false

module.exports = {
  mode: process.env.ENV,
  entry: isProduction ? {
    [`${pjson.name}-${pjson.version}.min`]: './src/index.js',
    'example': './src/example.js'
  } : {
    bundle: './src/index.js',
    sample: './src/test.js'
  },
  devtool: isProduction ? false : 'inline-source-map',
  devServer:{
    contentBase: './dev',
  },
  optimization: {
    minimizer: isProduction ? [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})] : []
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProduction ? `${pjson.name}-${pjson.version}.min.css` : 'style.css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, isProduction ? 'dist' : 'dev')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000
            }
          }
        ]
      }
    ]
  }
}