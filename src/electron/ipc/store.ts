import { ipcMain } from 'electron';
import Store from 'electron-store';
import { BaseStore } from '../store/BaseStore';
import { CesiumStore } from '../store/CesiumStore';

let cesiumStore = new CesiumStore(new Store);

type MainStore = {[index: string]: BaseStore}

const mainStore: MainStore = {
  cesium: cesiumStore,
}

ipcMain.handle(
  'store',
  async (
    event,
    name: string,
    method: string,
    params: unknown
  ): Promise<string|unknown> => {
    if (!name) return;
    const storeEntity = mainStore[name];

    // if isdev then console.log
    // console.log('ipcMain.handle', storeEntity, name, method);
    if (!storeEntity) return;

    let result = await storeEntity.do(method, params);
    return result
  },
);

console.log('_ipcHandler_store')
