# 前言

由于工作的需要，最近在构思一个服务于前端的“微服务”架构，即微前端.

# 什么是微前端

  微前端与微服务的概念类似，是将复杂的系统前端模块进行拆分细化成各个子应用，

  每个子应用可以拥有独立repository仓库，独立development开发，独立build构建，独立deployment部署，

  我们把这些子应用称为“微应用”，类似于微服务

  我们把管理子应用的应用称为“主应用”，有点像Console、Nacos等微服务注册中心

# 微前端的好处

1.可以将复杂系统的前端代码拆分细化到不同团队

2.每个微应用不再局限于同一种框架

3.每个微应用独立开发、构建、部署

4.主应用与微应用开发、构建、部署分离，实现真正的“可插拔式”架构

5.每个微应用独立访问时页面看起来与访问主应用一样，实现共享页面

6.方便测试，每个微应用都是独立的

7.丰富微服务，微服务不再单纯的提供API，也可输出web页面

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

4.设计模式之工厂模式、模板模式

5.umd、commonjs、es module等前端模块规范

………


# 微前端架构要考虑以下列几件事情：

1.主应用、各个微应用如何独立开发、构建、部署

2.主应用与微应用如何共享一套html或者说dom，以此来实现当单独访问微应用

  或者从主应用内部访问微应用时，用户看到的界面效果是一致的

3.微应用该如何暴露自己，通过什么方式暴露

4.主应用如何注册微应用，何时加载微应用，何时卸载，通过什么方式加载与卸载

5.主应用如何与微应用进行信息共享或者数据通讯，比如像jwt等等

6.微应用与微应用之间如何互相依赖

7.主应用、微应用如何样式隔离、变量隔离，做到沙箱sandbox

……

# 解决方案

针对上述问题，我们进行一步步分析

## 独立开发、构建、部署

1.利用github或者gitlab，主应用与每个微应用创建属于自己的repo。

主应用仓库类似于：https://github.com/arashiquan33/hollysys-mirco-front-end-framework

各个微应用也拥有属于自己的repo，但是就像vue、react框架那样，我们需要提供创建微应用工程的脚手架，方便微应用在几乎一样的规则下开发

微应用脚手架模板类似于：https://github.com/arashiquan33/hollysys-mirco-front-end-app-vue-example

在永远各自的仓库后，就可以进行独立开发，并且每个工程集成webpack或者rollup这样的工具进行独立构建打包

至于部署，可结合docker完成

这些内容，我们都可以通过提供微应用开发脚手架，我们称为mfe-cli来完成

## 共享html










# hollysys-mirco-front-end-framework

微前端应用基座，从 https://github.com/arashiquan33/hollysysyMircoFrontEndDraft  中进行升级，剥离微前端应用的实现，只保留管理模块

