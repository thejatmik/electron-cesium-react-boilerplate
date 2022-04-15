/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
    interface Window {
        electron: any;
        electronWindow: any;
        store: { invoke: any };
    }
}

// load contextBride methods here
import './electron/contextBridge';

console.log('preload done');
