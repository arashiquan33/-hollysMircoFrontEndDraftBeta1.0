import { HollysysAppManager } from "./types/HollysysAppManager";
import { HollysysWorkOrderApp } from "./HollysysWorkOrderApp";
//import { HollysysMiApp } from "./HollysysMiApp";



// const mountTo = document.getElementById(
//     "container",
// ) as HTMLElement;

// const registerAppsConfig = [
//     {
//         name: "myWorkOrder",
//         pathPrefix: "/workOrder",
//         appClass: HollysysWorkOrderApp,
//         mountTo,
//     },
//     {
//         name: "myMi",
//         pathPrefix: "/mi",
//         appClass: HollysysMiApp,
//         mountTo,
//     },
// ];

// //注册应用
// HollysysAppManager.registerApps(registerAppsConfig);

// window.addEventListener("hashchange", function () {
//     let locationHash = window.location.hash;
//     //取掉#号
//     let hashremovesympl = locationHash.substring(1);
//     //获取当前hash对应的appConfig
//     let appConfig = registerAppsConfig.find(
//         (item) => item.pathPrefix === hashremovesympl,
//     );
//     if (appConfig) {
//         //先卸载之前的
//         let apps = HollysysAppManager.getApps();
//         apps.forEach((item) =>
//         HollysysAppManager.uninstallApp(item),
//         );
//         //装载应用
//         HollysysAppManager.installApp(appConfig);
//     }
// });
