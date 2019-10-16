const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

processs.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devTool: "cheap-module-source-map", //let us see our original code when debugging in the browser
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true, //all request will be sent to index.html
    header: { "Access-Controll-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src.index.html",
      favicon: "src/favicon.ico"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
