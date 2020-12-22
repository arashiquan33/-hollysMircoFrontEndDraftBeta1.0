import { AppConfig, App } from './model';
export declare class HollysysAppManager {
    private appsConfig;
    private appsArray;
    /**
     * @description 注册应用，缓存应用注册配置对象
     * @param configs
     */
    registerApps(configs: AppConfig[]): void;
    /**
     * @description 获取应用配置
     */
    getAppsConfig(): AppConfig[];
    /**
     * @description 获取当前所有应用
     */
    getApps(): Array<App>;
    /**
     * @description 下载装配应用
     * @param appConfig
     */
    installApp(appConfig: AppConfig): void;
    /**
     * @description 卸载应用
     * @param appConfig
     */
    uninstallApp(appConfig: AppConfig): void;
}
