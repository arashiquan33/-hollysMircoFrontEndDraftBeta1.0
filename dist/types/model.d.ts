import { AbstractHollysysMircoFrontEndApp } from "./AbHollysysMircoFrontEndApp";
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
