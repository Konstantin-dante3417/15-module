const path = require('path');
const {cleanWebpackPlugin, CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].jsx"
  },
  plugins: [
    new HTMLWebpackPlugin({template: "./src/index.html"}),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ]
  }
}