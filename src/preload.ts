/* eslint-disable @typescript-eslint/no-explicit-any */
// import { exposeInMainWorld } from './main';
import runContextBridge, {
    appCtxBridges,
} from './main/contextBridge';
import { main as helloMain } from './plugins/hello';

declare global {
    interface Window {
        [key: string]: any;
    }
}

// load contextBride methods here, including plugin
let appPluginCtxBridges = [
    ...appCtxBridges,
    helloMain.helloCtxBridge
]
runContextBridge(...appPluginCtxBridges)
console.log('preload done');
