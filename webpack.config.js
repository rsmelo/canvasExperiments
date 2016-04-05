var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry:  {
    circles: __dirname + "/src/js/circles.js",
    triangles: __dirname + "/src/js/triangles.js",
    multipleTriangles: __dirname + "/src/js/multipleTriangles.js",
  },
  output: {
    path: __dirname + '/dist/js',
    filename: "[name].js"
  },
  module: {
    preLoaders: [
        {
            test: /\.js$/, // include .js files
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            loader: "eslint"
        }
    ],
    loaders: [      
      {
        test:   /\.html$/,
        exclude: /index.html/,
        loader: 'html!url-loader?limit=1&name=../[name].[ext]'
      },      
      {
        test:   /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract('style','css')
      }
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",      
      filename: "commons.js",
      chunks: ["circles", "triangles", "multipleTriangles"]
    }),
    new HtmlWebpackPlugin({
       title: "Canvas Experiments",      
       inject: false,
       template:  __dirname + "/src/template/index.html",
       filename:  __dirname + "/dist/index.html",
    }),    
    new ExtractTextPlugin("../css/[name].css")
  ],
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};