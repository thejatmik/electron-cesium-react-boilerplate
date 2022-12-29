/* eslint-disable @typescript-eslint/no-explicit-any */
// store handler for renderer process
import { ipcRenderer, IpcRendererEvent } from 'electron';

export default {
  key: 'store',
  api: {
    invoke: async ({ ...kwargs }: {[key: string]: any}): Promise<IpcRendererEvent> => {
      const { name, method, params, ...options } = kwargs;
      console.log('context store invoke', kwargs);
      return ipcRenderer.invoke(
        'store',
        name,
        method,
        params,
        options
      );
    },
  },
}

console.log('_contextBridge_store')
