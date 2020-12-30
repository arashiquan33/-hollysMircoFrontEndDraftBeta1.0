# 前言

由于工作的需要，最近在构思一个服务于前端的“微服务”架构，即微前端.

说到这里，可能有人要卧槽,一个微服务就够折腾了,怎么前端也要 "微服务" 化，放在一起**开发不香吗？**

考虑一下，如果你的系统是一个巨无霸系统，里面涵盖了N多模块，**代码千千万，依赖稀巴烂，构建超级慢，改一个bug，发一个版，测试要从头测到晚** 

那我希望你能看下去，更欢迎您与我一起 maintain 这个框架

当然，如果你的系统很简单，微前端，不适合。老老实实用大锅炉吧，一锅端比较好

## 什么是微前端

  微前端与微服务的概念类似，是将复杂的系统前端模块进行拆分细化成各个子应用，

  每个子应用可以拥有独立repository仓库，独立development开发，独立build构建，独立deployment部署，

  我们把这些子应用称为“微应用”，类似于微服务

  我们把管理子应用的应用称为“主应用”，有点像Console、Nacos等微服务注册中心的概念
  
  虽然看起来有点 **"偷天换日"** ，但是不这样做，怎么装X....
  

## 微前端的好处

1.可以将复杂系统的前端代码拆分细化到不同团队

2.每个微应用不再局限于同一种框架

3.每个微应用独立开发、构建、部署

4.主应用与微应用开发、构建、部署分离，实现真正的“可插拔式”架构

5.每个微应用独立访问时页面看起来与访问主应用一样，实现共享页面

6.方便测试，每个微应用都是独立的

7.丰富微服务，微服务不再单纯的提供API，也可输出web页面

…………

## 微前端的坏处

1.打破传统前端开发模式，开发人员有阵痛期

2.对开发人员技术水平有一定要求，尤其是对npm package、webpack、esm，commonjs、umd等前端模块化、mvvm框架基本原理、docker等有一定掌握

…………还有不少坏处，这里我就不列举了，害怕你们受不了

## 微前端入门必修知识

1.如何构建发布同一个组织机构下的npm package？这里罗列vue旗下的几个package，大家感受一下：

@vue/vue-cli，@vue/vue-router………

比如我们要做一个微前端框架，就需要在npm 上发布类似下面的包：

@hollysys-mirco-front-end/framework等等

2.如何利用构建工具，比如rollup、webpack，打包出一个library库，像ant-design、element-ui等

3.webpack library、externals概念，以及动态生成html的插件webpackHtmlPlugin

4.设计模式之工厂模式、模板模式

5.umd、commonjs、es module等前端模块规范

………这些知识如果不懂，那我建议你去查查资料，不一定为了学习微前端，**而是为了你自己**


## 微前端架构要考虑以下列几件事情：

1.主应用、各个微应用如何独立开发、构建、部署

2.主应用与微应用如何共享一套html或者说dom，以此来实现当单独访问微应用

  或者从主应用内部访问微应用时，用户看到的界面效果是一致的

3.微应用该如何暴露自己，通过什么方式暴露

4.主应用如何注册微应用，何时加载微应用，何时卸载，通过什么方式加载与卸载

5.主应用如何与微应用进行信息共享或者数据通讯，比如像jwt等等

6.微应用与微应用之间如何互相依赖

7.主应用、微应用如何样式隔离、变量隔离，做到沙箱sandbox

……应该还有一些坑，还在使劲踩的过程中

## 解决方案

针对上述问题，我们进行一步步分析，有点鱼骨图拔刺的味道了

### 独立开发、构建、部署

1.利用github或者gitlab，主应用与每个微应用创建属于自己的repo。

主应用仓库类似于：https://github.com/arashiquan33/hollysys-mirco-front-end-framework

各个微应用也拥有属于自己的repo，但是就像vue、react框架那样，我们需要提供创建微应用工程的脚手架hmfe-cli（hollysysMircoFrontEnd-cli），方便微应用在几乎一样的规则下开发

微应用脚手架模板类似于：https://github.com/arashiquan33/hollysys-mirco-front-end-app-vue-example

在拥有各自的仓库后，就可以进行独立开发，并且每个工程集成webpack或者rollup这样的工具进行独立构建打包

至于部署，可结合docker完成或者根据你们整体架构的方式来进行


### 应用间依赖

说到依赖，就不得不提npm package，大多数情况下我们都在使用别人写的package，这次我们翻身做主人，创建属于自己的package！！！

你一定看到过类似于这样的package：@webpack/webpack-cli,@webpack/webpack-devserve .....

没错，我们就要实现像这样带组织机构的package，进行统一管理，要搞就要搞的像回事！

主框架的package：@hollysys-mirco-front-end/framework


> **提示**
> 要发布一个npm package，需要在工程目录下package.json动动手脚，具体可以查看 https://www.npmjs.com 文档

package.json 部分内容：

```js

  "name": "@hollysys-mirco-front-end/framework",  //包名称
  "author": {
    "name": "quantianchao",
    "email": "304033826@qq.com"
  },
  "version": "0.0.31", // 包版本
  "description": "微前端基座，负责管理微前端各个应用",
  "main": "dist/hollysys-mirco-front-end-framework.js", //入口文件
  "types": "types/hollysys-mirco-front-end-framework.d.ts",
  "module": "dist/hollysys-mirco-front-end-framework.js",
  
```

各个微应用的package:@hollysys-mirco-front-end/app-vue-example


> **提示**
>app-vue-example是其中一个微应用的名称，通过dependenices来依赖主框架

package.json 部分内容：

```js

  "name":@hollysys-mirco-front-end/app-vue-example", //包名称
  "version": "0.0.25", //版本
  "description": "微前端应用示例",
  "main": "lib/hollysys-mirco-front-end-app-vue-example.umd.js",
  "module": "lib/hollysys-mirco-front-end-app-vue-example.umd.js",
   "dependencies": {
      "@hollysys-mirco-front-end/framework": "^0.0.32",  // 依赖主框架
      "core-js": "^3.6.5",
      "vue": "^2.6.11"
   },
   
```

app-vue-example微应用可以通过 **dependenices** 依赖来引入主应用framework暴露的一切

说到这来，可能有人要问，那要每个微应用都通过 **dependenices** 来依赖 framework

打包的时候岂不是重复打入了framework 代码？ 这部分内容，我们可以通过 **webpack externals** 来完成，，这部分一会介绍framework的时候会详细说.
 
anyway，应用之间的依赖关系我们通过npm package 来解决。 
 

### 主应用如何注册微应用，何时加载微应用，何时卸载，通过什么方式加载与卸载

咋一看，这部分我们要解决的内容很多，看起来很复杂，没关系，我们来捋一捋，我们可以通过抽象来把这事情讲清楚，大家就懂

1.抽象微应用,定义每个微应用该有的一些属性和方法

```js

abstract class AbstractHollysysMircoFrontEndApp {
 
   constructor(name: string, mountTo: HTMLElement,props:any) {
       this.name = name;
       this.mountTo = mountTo;
       this.props=props;
   }
   
   //微应用名称
   private name: string;

   //挂载的DOM节点，即微应用在html中显示到哪个区域
   private mountTo: HTMLElement;
   
   //应用接收外部传递的props共享信息
   private props:any


   //定义一系列 hook，微应用可自行实现hook,返回Promise，解决函数体内有可能出现的异步情况
   
   //应用安装前
   abstract beforeInstall(): Promise<any>;

  //应用安装
   abstract install():Promise<any>;

    //应用卸载
   abstract uninstall():Promise<any>;

    //应用卸载前
   abstract beforeUninstall():Promise<any>;
}

```

2.实现一个具体的微应用，以上述示例中app-vue-example为例:

```js

 import Vue from "vue";
 import App from "./App.vue";
 
 class HollysysAppVueExampe extends AbstractHollysysMircoFrontEndApp {
 
   public beforeInstall() {
       console.log(`HollysysAppVueExampe is preparing install`);
       Promise.resolve();
   }

   //安装的时候，实例化vue，挂载到mountTo节点
   public install() {
       let {mountTo,props} = this;
       new Vue({
              props,
              render: h => h(App)
            }).$mount(mountTo);
       return Promise.resolve();
   }

   public beforeUninstall() {
       console.log(`HollysysAppVueExampe is  preparing uninstall`);
   }

  //卸载的时候把自己渲染的区域清空
   public uninstall() {
       console.log(`HollysysAppVueExampe is  uninstalled`);
       this.mountTo.innerHTML=""
   }
}

```

3.定义应用管理者(单例)，管理微应用的注册、下载、安装、卸载等等.

>+ 注册微应用（registerApp）
>+ 启动工程   （bootstrap）
>+ 监听浏览器url-hash变化，找出当前hash对应的已经注册的微应用 （addHashchangeListener）
>+ 卸载旧应用 (uninstallApp)
>+ 下载新的微应用 （downloadApp)
>+ 安装微应用 (installApp)

```js

 export class HollysysMircoFrontEndAppManager {

    //微应用挂载的节点ID
    private  _appMountTo='#mountTo';

    private  _menuMountTo='#menu';

    private _isBootstrapCompleted:boolean=false;

    //已经注册的所有微应用
    private  _hasRegisterApps: RegisterAppArguments[]=[];


    /**
     * @description 注册应用
     * @param registerAppArguments
     */
    public registerApp(registerAppArguments: RegisterAppArguments) {
        this._hasRegisterApps.push(registerAppArguments);
    }

    /**
     * @description 获取注册的应用
     */
    public getRegisterApps():RegisterAppArguments[]{
        return this._hasRegisterApps;
    }

    public  downloadApp(registerAppArguments:RegisterAppArguments):Promise<any>{}

    /**
     * @description 下载装配应用
     * @param appConfig
     */
    public  async installApp(app: HollysysMircoFrontEndApp) {
        await app.beforeInstall();
        await app.install({
            mountTo:this._appMountTo,
            props:{a:1}
        });
    }

    /**
     * @description 卸载应用
     * @param appConfig
     */
    public  uninstallApp() {}

    /**
     * @description 启动
     */
    public bootstrap(){}

    /**
     * @description 绑定hashchange
     */
    private addHashchangeListener(){}

    /**
     * @description 浏览器hashchange变化的回调函数
     */
    private async hashChangeHandler(){}
}

```















