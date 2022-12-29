import { mainStore } from '../../';
import { BaseStore } from '../store';

export const storeHandler = {
  key: 'store',
  handlerFunc: async (
    _: Electron.IpcMainInvokeEvent,
    name: string,
    method: string,
    ...params: [any]
  ): Promise<string|any> => {
    if (!name) return;
    const storeEntity = mainStore[name];

    // if isdev then console.log
    // console.log('ipcMain.handle', storeEntity, name, method);
    if (!storeEntity) return;
    if (storeEntity instanceof BaseStore) {
      let result = await storeEntity.do(method, ...params);
      return result
    }

  }
}

console.log('_ipcHandler_store')
