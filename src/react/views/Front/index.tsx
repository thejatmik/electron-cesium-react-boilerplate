import classNames from 'classnames';
import React from 'react';
import {
  Link,
} from 'react-router-dom';
// import isElectron from 'is-electron';

import './front.css';

const {
  api,
} = window.electronWindow || {};
const {
  openNotification,
  createNewWindow,
} = api || {};

export interface newWindowOption {
  width?: number,
  height?: number,
  url?: string,
}

const Front = (): JSX.Element => {
  const handleCreateNotification = (e: React.MouseEvent) => {
    e.preventDefault();
    // console.log('handleCreateNotification');
    // console.log(window.electron);
    openNotification('Notification window');
    console.log('openNotification');
  }
  const handleOpenWindow = (args:newWindowOption) => {
    createNewWindow({
      height: args.height && 600,
      weight: args.width && 600,
      url: args.url
    });
    console.log('openWindow');
  }

  return (
    <div
      className={classNames(
        'front-container', 'front-container-flex',
      )}
      style={{
        backgroundColor: '#858585',
      }}
    >
      <div className='front-container-component-top'>
        <h1>Electron Cesium React</h1>
      </div>

      <div className='front-container-component-middle'>
        <h2>Create action from renderer</h2>
        <div>
          <h3>
            Using html component
          </h3>
          <button
            className='front-item-link'
            onClick={handleCreateNotification}
          >
            Create Notification
          </button>

          <button
            className='front-item-link'
            onClick={() => {
              handleOpenWindow({
                // url: window.location.pathname.split('?')[0] + '?settingToken',
              });
            }}
          >
            Open Window
          </button>
          <button
            className='front-item-link'
            onClick={() => {
              console.log(window.location.href, 'href');
              handleOpenWindow({
                url: window.location.href.split('?')[0] + '?settingToken',
              });
            }}
          >
            Open Setting Window
          </button>
          <button
            className='front-item-link'
            onClick={() => {
              handleOpenWindow({
                url: window.location.href.split('?')[0] + '?cesium',
              });
            }}
          >
            Open Cesium Window
          </button>
        </div>

        <div>
          <h3>
            Using React Link
          </h3>
          <div
            style={{
              padding: '1em',
            }}
          >
            <Link
              className='front-item-link'
              to="./main_window?settingToken"
            >
              Open Setting Page
            </Link>
            <Link
              className='front-item-link'
              to="./main_window?cesium"
            >
              Open Cesium Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Front;
