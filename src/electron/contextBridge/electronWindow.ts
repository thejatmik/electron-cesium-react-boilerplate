import { ipcRenderer, contextBridge } from "electron";

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

console.log('_contextBridge_electronWindow')
