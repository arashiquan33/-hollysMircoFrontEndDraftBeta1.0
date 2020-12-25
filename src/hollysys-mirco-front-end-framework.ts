/**
 * @ =应用抽象类
 */
export abstract class AbstractHollysysMircoFrontEndApp {
    constructor(name: string, mountTo: HTMLElement) {
        this.name = name;
        this.mountTo = mountTo;
    }
    
    //定义静态属性，组织机构名称
    public static orgName: string = "@hollysys";

    //微应用名称
    private name: string;

    //挂载的DOM节点
    private mountTo: HTMLElement;

    //获取名称
    public getName(): string {
        return this.name;
    }

    //获取挂载节点
    public getMountTo(): HTMLElement {
        return this.mountTo;
    }

    //定义一系列 hook，微应用可自行实现hook
    abstract beforeInstall(): void;

    abstract install(): void;

    abstract uninstall(): void;

    abstract beforeUninstall(): void;
}



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

    public beforeInstall:() => Promise<void>;

    public install:(installFunctionArguments:InstallFunctionArguments) => Promise<void>;
   
    public uninstall:() => Promise<void>;

    public beforeUninstall:() => Promise<void>;
  
}


export class HollysysMircoFrontEndAppManager {
    
    private static appsConfig: AppConfig[] = [];

    private static appMountTo='#mountTo';

   // private static appsArray: Array<App> = [];

    /**
     * @description 注册应用，缓存应用注册配置对象
     * @param configs
     */
    public static registerApps(configs: AppConfig[]) {
        this.appsConfig = configs;
    }

    
    // public static registerStandAloneApp(app:HollysysMircoFrontEndApp){
    //     app.
         
    // }


    /**
     * @description 获取应用配置
     */
    public static getAppsConfig():AppConfig[]{
         return this.appsConfig;
    }

    /**
     * @description 获取当前所有应用
     */

    // public static getApps(): Array<App> {
    //     return this.appsArray;
    // }

    /**
     * @description 下载装配应用
     * @param appConfig
     */
    public static async installApp(app: HollysysMircoFrontEndApp) {
        await app.beforeInstall();
        await app.install({
            mountTo:this.appMountTo,
            props:{a:1}
        });
        // let instance = new appConfig.appClass(
        //     appConfig.name,
        //     appConfig.mountTo,
        // );
        // let isRunning = true;
        // let {
        //     name,
        //     pathPrefix,
        //     mountTo,
        //     appClass,
        // } = appConfig;
        // let app = {
        //     instance,
        //     isRunning,
        //     name,
        //     pathPrefix,
        //     mountTo,
        //     appClass,
        // };
        // this.appsArray.push(app);
        // app.instance.beforeInstall();
        // app.instance.install();
    }

    /**
     * @description 卸载应用
     * @param appConfig
     */
    public static uninstallApp(appConfig: AppConfig) {
        // var app = {} as App;
        // var index = 0;
        // this.appsArray.forEach((a, i) => {
        //     if (a.name === appConfig.name) {
        //         app = a;
        //         index = i;
        //     }
        // });
        // if (app) {
        //     app.instance.beforeUninstall();
        //     app.instance.uninstall();
        //     this.appsArray.splice(index);
        // }
    }
}


export type Appclass = new (
    ...arg: any
) => AbstractHollysysMircoFrontEndApp;


//抽象定义应用注册时传递的参数
export interface AppConfig {
    //实例化应用的名称
    name: string;
    //应用的路由前缀
    pathPrefix: string;
    //应用挂载的HTMLElement
    mountTo: HTMLElement;
    //应用对应的class
    appClass: Appclass;
}

// export interface App extends AppConfig {
//     isRunning: boolean;
//     instance: AbstractHollysysMircoFrontEndApp;
// }

export interface AppConstructorArguments{
    name:string;
    pathPrefix:string;
    beforeInstall:()=> Promise<void>;
    install:()=> Promise<void>;
    uninstall:()=> Promise<void>;
    beforeUninstall:()=> Promise<void>;
}

export interface InstallFunctionArguments{
    mountTo:string;
    props:Object
}