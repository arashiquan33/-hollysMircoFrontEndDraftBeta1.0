# 什么是微前端

  微前端与微服务的概念类似，是将复杂的系统前端模块进行拆分细化成各个子应用，

  每个子应用可以拥有独立repository仓库，独立development开发，独立build构建，独立deployment部署，

  我们把这些子应用成为“微应用”

# 微前端的好处

1.可以将复杂系统的前端代码拆分细化到不同团队

2.每个微应用不再局限于同一种框架

3.独立开发、构建、部署

4.方便测试，每个微应用都是独立的

5.丰富微服务，微服务不再单纯的提供API，也可输出web页面

…………

# 微前端的坏处

1.打破传统前端开发模式，开发人员有阵痛期

2.对开发人员技术水平有一定要求，尤其是对npm package、webpack、esm，commonjs、umd等前端模块化、mvvm框架基本原理、docker等有一定掌握

…………

# 微前端入门必修知识

1.如何构建发布同一个组织机构下的npm package？这里罗列vue旗下的几个package，大家感受一下：

@vue/vue-cli，@vue/vue-router………

比如我们要做一个微前端框架，就需要在npm 上发布类似下面的包：

@hollysys-mirco-front-end/framework等等

2.如何利用构建工具，比如rollup、webpack，打包出一个library库，像ant-design、element-ui等

3.webpack library、externals概念，以及动态生成html的插件webpackHtmlPlugin

4.设计模式之工厂模式

………



总体来讲，微前端架构要完成下列几件事情：

# hollysys-mirco-front-end-framework

微前端应用基座，从 https://github.com/arashiquan33/hollysysyMircoFrontEndDraft  中进行升级，剥离微前端应用的实现，只保留管理模块

