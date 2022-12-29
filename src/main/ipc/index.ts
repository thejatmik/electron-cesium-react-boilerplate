// using electron-store@6.0.1 because later version throwing 'ajv-formats' missing module error
import { ipcMain } from 'electron';
import { IpcHandler } from '../../types';

export const addHandler = (
  ipcHandler: IpcHandler,
  ipc: Electron.IpcMain = ipcMain
): void => {
  if (ipcHandler.listener) {
    ipc.on(ipcHandler.key, ipcHandler.listener)
  } else if (ipcHandler.handlerFunc) {
    ipc.handle(ipcHandler.key, ipcHandler.handlerFunc);
  }
}

export { storeHandler } from './store';
export { notifyHandler, windowHandler } from './window';
