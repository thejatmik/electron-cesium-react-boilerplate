import { ipcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld("electron", {
  notificationApi: {
    sendNotification(message: string) {
      ipcRenderer.send("notify", message);
    },
  },
  batteryApi: {},
  fileApi: {},
});

console.log('_contextBridge_electron')
