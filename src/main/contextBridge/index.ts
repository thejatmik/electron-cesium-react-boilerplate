import { contextBridge } from 'electron';
import { ContextApi } from '../../types';
import electronStoreContextBridge from './store';
import electronWindowContextBridge from './electronWindow';
import electronContextBridge from './electron';

export const expose = (
  key: string,
  api: ContextApi,
  ctxBridge: Electron.ContextBridge = contextBridge,
): void => {
  ctxBridge.exposeInMainWorld(key, api);
}

export default (
  ...appCtxBridges: { key?: string; api?: ContextApi }[]
): void => {
  if (
    !appCtxBridges ||
    (
      typeof(appCtxBridges) == 'object'
      && appCtxBridges.length
      && appCtxBridges.length < 1
    )
  ) {
    expose(
      electronContextBridge.key,
      electronContextBridge.api,
    )
    expose(
      electronWindowContextBridge.key,
      electronWindowContextBridge.api,
    )
    expose(
      electronStoreContextBridge.key,
      electronStoreContextBridge.api,
    )
  }
  appCtxBridges.forEach((item) => {
    expose(item.key, item.api);
  });
};

export const appCtxBridges = [
  electronContextBridge,
  electronStoreContextBridge,
  electronWindowContextBridge,
];
