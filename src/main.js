 import {HollysysMircoFrontEndAppManager} from './hollysys-mirco-front-end-framework'
 
 //获取实例
 const hollysysMircoFrontEndAppManager =  HollysysMircoFrontEndAppManager.getInstance();


 //注册微应用
 hollysysMircoFrontEndAppManager.registerApp({
     name:'@hollysys-mirco-front-end/app-vue-example',
     number:'0.0.24',
     appModuleName:'hollysysMircoFrontEndAppVueExample',
     appModuleUrl:'https://unpkg.com/@hollysys-mirco-front-end/app-vue-example@0.0.24/lib/hollysys-mirco-front-end-app-vue-example.umd.js',
     routerBasePath:'/app-vue-example'
 })

 //启动
 hollysysMircoFrontEndAppManager.bootstrap();

