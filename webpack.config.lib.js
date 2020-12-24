const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {name,version}=require("./package.json");

module.exports = {
  mode:'production',
  entry: {
    "hollysys-mirco-front-end-core":"./src/hollysys-mirco-front-end-core.ts" //lib 是主应用对外暴露的api js
  },
  output: {
    path: path.resolve(__dirname, 'lib/'),
    filename: function(chunks,a){
        return '[name].js'
    },
    library:'hollysysMircoFrontEndCore',//library 命名，当使用<script></script>加载时，挂载到window.hollysysMircoFrontEndCore,
    libraryTarget:"umd"   //输出为umd格式，适应不同模块系统
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
  plugins:[
    new CleanWebpackPlugin(),
    //打包出两个html，第一个是输出给每个应用独立部署、运行时使用
    //只包含lib.js，即当微应用使用这个html的时候，能够在html中获取到lib.js，lib.js会对外暴露可以使用的HollysysApp等类
    new HtmlWebpackPlugin({
      title: 'hollysys-mirco-front-end-app-standalone',
      template: 'template.html',
      isStandalone:true,//添加变量，在template.html中通过判断来动态生成lib文件，并且指向unkg静态代理网站，让lib通过script方式加载
      upkgscript:'https://unpkg.com/'+name+'@latest',
      filename:'standalone.html',
      chunks:['']
    })
  ]
};