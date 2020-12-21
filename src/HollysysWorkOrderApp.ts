/**
 * @ 工单应用
 */

import { AbstractHollysMircoFrontEndApp } from "./lib/AbHollysMircoFrontEndApp";

export class HollysysWorkOrderApp extends AbstractHollysMircoFrontEndApp {
    public beforeInstall() {
        console.log(`workorderApp is preparing install`);
    }

    public install() {
        let mountTo = this.getMountTo();
        mountTo.innerHTML = "workorderApp is  installed";
    }

    public beforeUninstall() {
        console.log(`workorderApp is  preparing uninstall`);
    }

    public uninstall() {
        console.log(`workorderApp is  uninstalled`);
    }
}
