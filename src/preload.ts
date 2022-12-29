/* eslint-disable @typescript-eslint/no-explicit-any */
// import { exposeInMainWorld } from './main';
import runContextBridge, {
    appCtxBridges,
} from './main/contextBridge';

declare global {
    interface Window {
        [key: string]: any;
    }
}

// load contextBride methods here
runContextBridge(...appCtxBridges)
console.log('preload done');
