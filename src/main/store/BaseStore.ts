import Store from 'electron-store';
import {
  BaseStore as BaseStoreInterface,
  MethodMap,
} from '../../types';

export class BaseStore implements BaseStoreInterface {
  store: Store;
  methodMap: MethodMap;
  do: (command: string, params: any) => Promise<any>|any;

  constructor(store: Store = new Store()) {
    this.store = store;
    this.methodMap = {};
    this.do = (command, params) => {
      if (this.methodMap[command]) {
        let method = this.methodMap[command];
        return method(params);
      } else {
        throw new Error('command not found');
      }
    }
  }
}
