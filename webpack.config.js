var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: 'source-map',
  entry:  {
    circles: __dirname + "/src/js/circles.js",
    triangles: __dirname + "/src/js/triangles.js",
    multipleTriangles: __dirname + "/src/js/multipleTriangles.js",
  },
  output: {
    path: __dirname + '/builds',
    filename: "[name].bundle.js"
  },
  plugins: [
   new HtmlWebpackPlugin({
      title: "Circles",
      template:  __dirname + "/src/template/circles.html",
      filename: __dirname + "/builds/circles.html",
    }),
   new HtmlWebpackPlugin({
      title: "triangles",
      template:  __dirname + "/src/template/triangles.html",
      filename: __dirname + "/builds/triangles.html",
    }),
   new HtmlWebpackPlugin({
      title: "multipleTriangles",
      template:  __dirname + "/src/template/multipleTriangles.html",
      filename: __dirname + "/builds/multipleTriangles.html",
    }),
  ],
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
        test:   /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ],
  },
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  jshint: {
    esversion: 6,
    browser: true
  }
};