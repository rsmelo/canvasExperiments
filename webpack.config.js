module.exports = {
  devtool: 'source-map',
  entry:  __dirname + "/src/main.js",  
  output: {
    path: __dirname + '/builds',
    filename: 'bundle.js'    
  },
  module: {
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
  }  
};