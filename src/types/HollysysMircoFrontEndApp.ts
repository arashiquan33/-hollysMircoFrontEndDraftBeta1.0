import {AppConstructorArguments} from './model'

/**
 * @ =应用抽象类
 */
export  class HollysysMircoFrontEndApp {
    constructor(appConstructorArguments:AppConstructorArguments) {
       let {name,beforeInstall,install,uninstall,beforeUninstall,pathPrefix} = appConstructorArguments;
       this.name=name;
       this.pathPrefix=pathPrefix;
       this.beforeInstall=beforeInstall;
       this.install=install;
       this.uninstall=uninstall;
       this.beforeUninstall=beforeUninstall;
    }
    
    //微应用名称
    private name: string;

    private pathPrefix:string;

    //挂载的DOM节点
   // private mountTo: HTMLElement;

    //获取名称
    public getName(): string {
        return this.name;
    }

     //获取路由前缀
     public getPathPrefix(): string {
        return this.pathPrefix;
    }

    //获取挂载节点
    // public getMountTo(): HTMLElement {
    //     return this.mountTo;
    // }

    public beforeInstall:Function=function(){};
    public install:Function=function(){};
    public uninstall:Function=function(){};
    public beforeUninstall:Function=function(){};
  
}
