// import path from "path";
const path = require('path'); // node

module.exports = {
  name: "word-relay-setting", // webpack 이름
  mode: "development", // 실서비스에서는 production
  devtool: "eval",
  resolve: {
      extensions: ['.js', '.jsx'] // 확장자
  },
  entry: {
    app: ["./client"], // 이미 파일 내에서 불러오고 있는 파일은 넣지 않아도 됨.
  }, // 입력
  module:{
      rules:[{
          test: /\.jsx?/, 
          loader: 'babel-loader',
          options:{
              presets:['@babel/preset-env', '@babel/preset-react'],
          },
      }],
  },
  output: {
    path: path.join(__dirname, "dist"), // __dirname: 현재경로, 'dist': 폴더명
    filename: "app.js",
  }, // 출력
};
