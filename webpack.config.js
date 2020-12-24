const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {name,version}=require("./package.json");

module.exports = {
  mode:'production',
  entry: {
    "main":"./src/main.ts"//main是主应用的业务js
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: function(chunks,a){
      return '[name].js'
    }
  },
  module: {
    rules: [  // 添加解析规则
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
   },
   resolve: {   // 需要打包的文件后缀
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer:{
    port:1234
  },
  plugins:[
    new CleanWebpackPlugin(),
    //第二个是主应用运行时使用的html
    new HtmlWebpackPlugin({
      title: 'hollysys-mirco-front-end-core',
      template: 'template.html',
      filename:'index.html'
    })
  ]
};