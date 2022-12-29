import { ipcRenderer } from "electron";
import { NewWindowOption } from "../../types";

export default {
  key: 'electronWindow',
  api: {
    api: {
      openNotification(message: string): void {
        ipcRenderer.send("notify", message);
      },
      createNewWindow({...kwargs}: NewWindowOption): void {
        ipcRenderer.send("create-new-window", kwargs);
      },
    },
  },
};

console.log('_contextBridge_electronWindow')
