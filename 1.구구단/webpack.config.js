const path = require("path");
const { webpack } = require("webpack");

//webpack 공식문서 https://webpack.js.org

module.exports = {
  mode: "development",
  devtool: "eval", // production 일때는 hidden-source-map
  resolve: {
    extensions: [".jsx", ".js"], // 확장자 생략
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              // https://github.com/browserslist/browserslist#queries
              // preset은 plugin들의 집합
              {
                targets: { browsers: [">1% in KR"] }, // 한국 점유율 1퍼센트 이상 브라우저에서만 지원
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [],
        },
      },
    ],
  },
  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"), // __dirname: 현재경로, 'dist': 폴더명
  },
};
