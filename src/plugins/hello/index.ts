import { Notification, ipcRenderer } from 'electron';

export const main = {
  ipcHandler: {
    key: 'hello',
    listener: (_: Electron.IpcMainEvent, message: string): void => {
      new Notification({ title: 'Hello', body: `hello world. ${message}` }).show();
    },
  },
  // addIpcMainHandler(ipcHandler);
  helloCtxBridge: {
    key: 'hello',
    api: {
      notif: (message: string): void => {
        ipcRenderer.send('hello', message);
      }
    },
  },
}
