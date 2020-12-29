/**
 * @ =应用抽象类
 */
export declare abstract class AbstractHollysysMircoFrontEndApp {
    constructor(name: string, mountTo: HTMLElement);
    static orgName: string;
    private name;
    private mountTo;
    getName(): string;
    getMountTo(): HTMLElement;
    abstract beforeInstall(): void;
    abstract install(): void;
    abstract uninstall(): void;
    abstract beforeUninstall(): void;
}
/**
 * @ =应用抽象类
 */
export declare class HollysysMircoFrontEndApp {
    constructor(appConstructorArguments: AppConstructorArguments);
    private name;
    private pathPrefix;
    getName(): string;
    getPathPrefix(): string;
    beforeInstall: () => Promise<void>;
    install: (installFunctionArguments: InstallFunctionArguments) => Promise<void>;
    uninstall: () => Promise<void>;
    beforeUninstall: () => Promise<void>;
}
/**
 * @description 微应用管理类，负责微应用的注册、装载、卸载,采用单例模式，同时只能存在一个manager
 * @example const hollysysMircoFrontEndAppManager=HollysysMircoFrontEndAppManager.getInstance();
 */
export declare class HollysysMircoFrontEndAppManager {
    private constructor();
    private static instance;
    /**
     * 获取单例
     */
    static getInstance(): HollysysMircoFrontEndAppManager;
    private _appMountTo;
    private _menuMountTo;
    private _isBootstrapCompleted;
    private _hasRegisterApps;
    /**
     * @description 注册应用
     * @param registerAppArguments
     */
    registerApp(registerAppArguments: RegisterAppArguments): void;
    /**
     * @description 获取注册的应用
     */
    getRegisterApps(): RegisterAppArguments[];
    downloadApp(registerAppArguments: RegisterAppArguments): Promise<any>;
    /**
     * @description 下载装配应用
     * @param appConfig
     */
    installApp(app: HollysysMircoFrontEndApp): Promise<void>;
    /**
     * @description 卸载应用
     * @param appConfig
     */
    uninstallApp(): void;
    /**
     * @description 启动
     */
    bootstrap(): void;
    /**
     * @description 绑定hashchange
     */
    private addHashchangeListener;
    /**
     * @description 浏览器hashchange变化的回调函数
     */
    private hashChangeHandler;
}
export interface RegisterAppMenuArguments {
    displayName: string;
    link?: string;
    subMenu?: RegisterAppMenuArguments[];
}
export interface RegisterAppArguments {
    name: string;
    appModuleUrl: string;
    version: string;
    routerBasePath: string;
}
export interface AppConstructorArguments {
    name: string;
    pathPrefix: string;
    beforeInstall: () => Promise<void>;
    install: () => Promise<void>;
    uninstall: () => Promise<void>;
    beforeUninstall: () => Promise<void>;
}
export interface InstallFunctionArguments {
    mountTo: string;
    props: Object;
}
