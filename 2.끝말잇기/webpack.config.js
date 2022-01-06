// import path from "path";
const path = require("path"); // node
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); //

module.exports = {
  name: "word-relay-setting", // webpack 이름
  mode: "development", // 실서비스에서는 production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"], // 확장자
  },
  entry: {
    app: ["./client"], // 이미 파일 내에서 불러오고 있는 파일은 넣지 않아도 됨.
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
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
            'react-refresh/babel',
          ],
        },
      },
    ],
  },
  plugins:[
    new RefreshWebpackPlugin({overlay:false}),
  ],
  output: {
    path: path.join(__dirname, "dist"), // __dirname: 현재경로, 'dist': 폴더명
    filename: "app.js",
    publicPath: "/dist/",
  }, // 출력
  devServer:{ // 프론트 개발용 서버
    hot: true
  },
};
