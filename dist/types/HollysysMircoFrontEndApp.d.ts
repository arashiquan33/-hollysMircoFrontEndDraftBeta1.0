import { AppConstructorArguments } from './model';
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
