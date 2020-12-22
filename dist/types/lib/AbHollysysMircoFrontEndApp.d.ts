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
