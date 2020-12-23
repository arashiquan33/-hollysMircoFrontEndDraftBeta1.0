const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  mode:'development',
  entry: {
    main:"./src/main.ts",//打包两个文件，一个是main,main是主应用的业务js
    lib:"./src/lib.ts" //lib 是主应用对外暴露的api js
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
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
  devServer:{
    port:1234
  },
  plugins:[
    new CleanWebpackPlugin(),
    //打包出两个html，第一个是输出给每个应用独立部署、运行时使用
    //只包含lib.js，即当微应用使用这个html的时候，能够在html中获取到lib.js，lib.js会对外暴露可以使用的HollysysApp等类
    new HtmlWebpackPlugin({
      title: 'hollysys-mirco-front-end-app',
      template: 'template.html',
      filename:'standalone.html',
      chunks:['lib']
    }),
    //第二个是主应用运行时使用的html
    new HtmlWebpackPlugin({
      title: 'hollysys-mirco-front-end-core',
      template: 'template.html',
      filename:'index.html',
      excludeChunks:['lib']
    })
  ]
};