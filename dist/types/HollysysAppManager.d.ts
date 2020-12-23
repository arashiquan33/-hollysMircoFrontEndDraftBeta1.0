import { AppConfig, App } from './model';
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
