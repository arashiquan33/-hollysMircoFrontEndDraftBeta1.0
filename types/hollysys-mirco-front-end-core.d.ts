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
    beforeInstall: Function;
    install: Function;
    uninstall: Function;
    beforeUninstall: Function;
}
export declare class HollysysAppManager {
    private static appsConfig;
    private static appsArray;
    /**
     * @description 注册应用，缓存应用注册配置对象
     * @param configs
     */
    static registerApps(configs: AppConfig[]): void;
    /**
     * @description 获取应用配置
     */
    static getAppsConfig(): AppConfig[];
    /**
     * @description 获取当前所有应用
     */
    static getApps(): Array<App>;
    /**
     * @description 下载装配应用
     * @param appConfig
     */
    static installApp(appConfig: AppConfig): void;
    /**
     * @description 卸载应用
     * @param appConfig
     */
    static uninstallApp(appConfig: AppConfig): void;
}
export declare type Appclass = new (...arg: any) => AbstractHollysysMircoFrontEndApp;
export interface AppConfig {
    name: string;
    pathPrefix: string;
    mountTo: HTMLElement;
    appClass: Appclass;
}
export interface App extends AppConfig {
    isRunning: boolean;
    instance: AbstractHollysysMircoFrontEndApp;
}
export interface AppConstructorArguments {
    name: string;
    pathPrefix: string;
    beforeInstall: Function;
    install: Function;
    uninstall: Function;
    beforeUninstall: Function;
}
