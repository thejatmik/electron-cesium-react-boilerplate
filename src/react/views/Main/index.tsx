import React from 'react';
import {
  Link,
} from 'react-router-dom';
import isElectron from 'is-electron';

const {
  api,
} = window.electronWindow || {};
const {
  openNotification,
  createNewWindow,
} = api || {};

const Main = (): JSX.Element => {
  const handleOpenDialog01 = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('handleOpenDialog01');
    console.log(window.electron);
    openNotification('lele');
  }
  const handleOpenWindow01 = (e: React.MouseEvent) => {
    e.preventDefault();
    createNewWindow({
      height: 600,
      weight: 600,
      url: window.location.pathname + "?settingToken"
    });
  }
  return (
    <>
      <h1>Hello</h1>
      <button
        onClick={handleOpenDialog01}
      >
        {JSON.stringify(isElectron())} Open Dialog
      </button>
      <button
        onClick={handleOpenWindow01}
      >
        {JSON.stringify(isElectron())} Open Window
      </button>
      <Link
        to="/main_window?settingToken"
        target="_blank"
      >
        Open Setting Window
      </Link>
      <Link
        to="/main_window?cesium"
        target="_blank"
      >
        Open Cesium Window
      </Link>
    </>
  )
}

export default Main;

