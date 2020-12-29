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

/**
 * @description 微应用管理类，负责微应用的注册、装载、卸载,采用单例模式，同时只能存在一个manager
 * @example const hollysysMircoFrontEndAppManager=HollysysMircoFrontEndAppManager.getInstance();
 */
 export class HollysysMircoFrontEndAppManager {

    //私有化构造函数，不能通过new 来实例对象，只能通过getInstance()方法 
    private constructor(){}

    //缓存单例
    private static instance:HollysysMircoFrontEndAppManager;

    /**
     * 获取单例
     */
    public static getInstance(): HollysysMircoFrontEndAppManager {
        if (this.instance == null) {
            this.instance = new HollysysMircoFrontEndAppManager();
        }
        return HollysysMircoFrontEndAppManager.instance;
    }
    
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

    public  downloadApp(registerAppArguments:RegisterAppArguments):Promise<any>{
           return new Promise((resolve,reject)=>{
                //获取head的标签
                var head= document.getElementsByTagName('head')[0];
                //创建script标签
                var script= document.createElement('script');
                //属性赋值
                script.type= 'text/javascript';
                //添加src属性值
                script.src= registerAppArguments.appModuleUrl;
                head.appendChild(script);
                //回调
                script.onload =  function(e) {
                    console.log(e)
                    resolve(true);
                };
           })
    }

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
    public  uninstallApp() {
      
    }

    /**
     * @description 启动
     */
    public bootstrap(){

        //如果已经初始化成功，后续再调用该方法，直接return
        if(this._isBootstrapCompleted) return;

        //绑定浏览器hashchange监听器
        this.addHashchangeListener();

        this._isBootstrapCompleted=true;
    }

    /**
     * @description 绑定hashchange
     */
    private addHashchangeListener(){
        this.hashChangeHandler();
        window.addEventListener('hashchange',this.hashChangeHandler);
    }

    /**
     * @description 浏览器hashchange变化的回调函数
     */
    private async hashChangeHandler(){
        let hash = location.hash;
        let registerApps=this.getRegisterApps();
        let hashMatchedRegisterApp=registerApps.find((registerApp)=>{
               let {routerBasePath} = registerApp;    
               let reg=new RegExp("^#"+routerBasePath,"g");
               if(reg.test(hash)) return true;
        })
        if(hashMatchedRegisterApp){
           let downloadSuccess =  await this.downloadApp(hashMatchedRegisterApp); 
        }
    }
}

//创建单例对象
const managerInstance=HollysysMircoFrontEndAppManager.getInstance();







//注册APP菜单参数对象
export interface RegisterAppMenuArguments{
   displayName:string  
   link?:string
   subMenu?:RegisterAppMenuArguments[]
}

//注册APP参数对象
export interface RegisterAppArguments{
    name:string
    appModuleUrl:string
    version:string
    routerBasePath:string
}

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
