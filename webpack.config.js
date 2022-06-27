const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-mi")

module.exports = {
  entry: "./src/js/index.js", // 자바스크립트의 진입점을 나타냄
  output: {
    filename: "bundle.js", // 번들 파일 이름
    path: path.resolve(__dirname, "./dist"), // 번들 파일 생성 경로
    clean: true, // 중복된 파일이 발견 되면 덮어쓰기
  }, // 빌드를 했을 때, 언디파인드 속성
  devtool: "source-map",
  mode: "development",
  Plugins: [
    new HtmlWebpackPlugin({
      title: "keyboard",
      template: "./index.html",
      inject: "body",
      favicon: "./favicon.ico",
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  // optimization: {
  //   minimizer: [new TerserWebpackPlugin()],
  // },
};
