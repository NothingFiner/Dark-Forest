const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/game.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".sass"]
  },
  devtool: 'source-maps',
  module: {
    loaders: [
      {
        test: [ /\.js?$/,],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        },
      },
      {
        test: /\.sass$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader", options: {
              sourceMap: true
            }
        }, {
            loader: "sass-loader", options: {
              sourceMap: true
            }
        }]
      }
    ],
  }
};
