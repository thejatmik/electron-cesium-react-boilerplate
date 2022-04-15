import Store from 'electron-store';
import MethodMap from '../../types/MethodMap';

export class BaseStore {
  store: Store;
  methodMap: MethodMap;
  do: (command: string, params: unknown) => unknown;

  constructor(store: Store) {
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
