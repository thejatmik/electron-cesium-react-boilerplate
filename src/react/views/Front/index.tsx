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

const Front = (): JSX.Element => {
  const handleCreateNotification = (e: React.MouseEvent) => {
    e.preventDefault();
    // console.log('handleCreateNotification');
    // console.log(window.electron);
    openNotification('Notification window');
    console.log('openNotification');
  }
  const handleOpenWindow = (e: React.MouseEvent) => {
    e.preventDefault();
    createNewWindow({
      height: 600,
      weight: 600,
      url: window.location.pathname + "?settingToken"
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
            onClick={handleOpenWindow}
          >
            Open Window
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
              to="/main_window?settingToken"
            >
              Open Setting Page
            </Link>
            <Link
              className='front-item-link'
              to="/main_window?settingToken"
              target="_blank"
            >
              Open Setting Window
            </Link>
            <Link
              className='front-item-link'
              to="/main_window?cesium"
            >
              Open Cesium Page
            </Link>
            <Link
              className='front-item-link'
              to="/main_window?cesium"
              target="_blank"
            >
              Open Cesium Window
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Front;
