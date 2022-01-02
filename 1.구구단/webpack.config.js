const path = require('path');

module.exports = {
    mode : 'development',
    devtool : 'eval', // production 일때는 hidden-source-map
    resolve :{
        extensions: ['.jsx', '.js'], // 확장자 생략
    },
    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test:/\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    },
    output: {
        filename: 'app.js',
        path: path.join(__dirname, "dist"), // __dirname: 현재경로, 'dist': 폴더명
    },
}