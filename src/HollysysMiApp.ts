import { AbstractHollysMircoFrontEndApp } from "./lib/AbHollysMircoFrontEndApp";

/**
 * @ Mi应用
 */
export class HollysysMiApp extends AbstractHollysMircoFrontEndApp {
    public beforeInstall() {
        console.log(`miApp is preparing install`);
    }

    public install() {
        let mountTo = this.getMountTo();
        mountTo.innerHTML = "miApp is  installed";
    }

    public beforeUninstall() {
        console.log(`miApp is  preparing uninstall`);
    }

    public uninstall() {
        console.log(`miApp is  uninstalled`);
    }
}