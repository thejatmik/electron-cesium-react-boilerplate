/* eslint-disable @typescript-eslint/no-explicit-any */
// store handler for renderer process
import { ipcRenderer, contextBridge } from 'electron';

contextBridge.exposeInMainWorld(
  'store', {
    invoke: async ({ ...kwargs }) => {
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
);

console.log('_contextBridge_store')
