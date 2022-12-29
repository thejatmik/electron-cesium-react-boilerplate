import { Notification } from 'electron';
import {NewWindowOption} from '../../types';
import {createNewWindow} from '../window';

export const notifyHandler = {
  key: 'notify',
  listener: (
    _: Electron.IpcMainEvent,
    message: string,
  ): void => {
    new Notification({ title: "Notification", body: message }).show();
  }
}

console.log('_ipcHandler_notify');

export const windowHandler = {
  key: 'create-new-window',
  listener: (
    _: Electron.IpcMainEvent,
    args: NewWindowOption,
  ): void => {
    createNewWindow(args);
  }
}
console.log('_ipcHandler_window');
