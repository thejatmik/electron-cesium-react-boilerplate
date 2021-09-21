import { ipcRenderer, contextBridge } from "electron";

import * as mainWindow from './electron/window/main';

declare global {
    interface Window {
        electron: any;
        electronWindow: any;
    }
}

contextBridge.exposeInMainWorld("electronWindow", {
  api: {
    openNotification(message: string) {
      ipcRenderer.send("notify", message);
    },
    createNewWindow({...kwargs}) {
      ipcRenderer.send("create-new-window", kwargs);
    },
  },
});
contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message: string) {
      ipcRenderer.send("notify", message);
    },
  },
  batteryApi: {},
  fileApi: {},
});

console.log('preload done');
