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
export declare class HollysysMircoFrontEndAppManager {
    private static appsConfig;
    private static appMountTo;
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
    /**
     * @description 下载装配应用
     * @param appConfig
     */
    static installApp(app: HollysysMircoFrontEndApp): Promise<void>;
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
