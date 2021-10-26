import Store from 'electron-store';
import { BaseStore } from './BaseStore';

export class CesiumStore extends BaseStore {
  constructor (store: Store) {
    super(store);
    this.methodMap = {
      'setIonToken': this.setIonToken,
      'getIonToken': this.getIonToken,
    }
  }

  setIonToken = async (token: string|undefined): Promise<void> => {
    await this.store.set('cesium.IonToken', token);
  }

  getIonToken = async (): Promise<string|undefined|unknown> => {
    let result = await this.store.get('cesium.IonToken');
    return result;
  }
}
