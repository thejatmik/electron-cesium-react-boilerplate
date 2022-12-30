// types/index.ts

import Store from "electron-store";

export interface ArgsFunction {
  (...args: any): any
}

export interface KwargsFunction {
  ({...kwargs}: {[key: string]: any}): any
}

export interface BaseStore {
  store: Store;
  methodMap: MethodMap;
  do: (command: string, params: any) => Promise<any>|any;

}

export type MethodMap = {
  [index: string] : (args: any) => any
}

export type CtxBridgeFunction = ArgsFunction | KwargsFunction

export type MainStore = {
  create?: (key: string, storeEntity: BaseStore) => void;
  [index: string]: BaseStore|unknown;
} 
export interface NewWindowOption {
  width?: number,
  height?: number,
  url?: string,
}

export interface ContextApi {
  [key: string]: CtxBridgeFunction | undefined | {
    [subkey: string]: CtxBridgeFunction;
  }
}

export interface IpcHandler {
    key: string,
    handlerFunc?: (event: Electron.IpcMainInvokeEvent, ...args: any) => any,
    listener?: (event: Electron.IpcMainEvent, ...args: any) => any,
}

export type ViewManagerSwitch = {
  addComponent?: (key: string, element: (...args:React.ComponentProps<any>) => React.ReactElement) => void;
  get?: (key: string) => (...args:React.ComponentProps<any>) => React.ReactElement;
  default: (...args:React.ComponentProps<any>) => React.ReactElement;
  [index: string]: (...args:React.ComponentProps<any>) => React.ReactElement|any;
} 
