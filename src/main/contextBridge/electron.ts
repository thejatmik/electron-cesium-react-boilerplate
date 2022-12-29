import { ipcRenderer } from "electron";

export default {
  key: 'electron',
  api: {
    notificationApi: {
      sendNotification(message: string): void {
        ipcRenderer.send("notify", message);
      },
    },
  },
};

console.log('_contextBridge_electron')
