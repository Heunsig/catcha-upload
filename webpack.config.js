const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const isProduction = process.env.ENV === 'production' ? true : false

module.exports = {
  mode: process.env.ENV,
  entry: './src/index.js',
  devtool: isProduction ? false : 'inline-source-map',
  devServer:{
    contentBase: './dev',
  },
  optimization: {
    minimizer: isProduction ? [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})] : []
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  output: {
    filename: 'bundle.js',
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