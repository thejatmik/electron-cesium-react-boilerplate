import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import ViewManager from './ViewManager';
import ConsoleFeed from './components/ConsoleFeed';
import { ViewManagerSwitch } from '../types';

import './index.css';

export const viewManagerSwitch: ViewManagerSwitch = {
  'addComponent': (key, element) => {
    viewManagerSwitch[key] = element
  },
  'get': (key) => {
    if (!viewManagerSwitch[key]) {
      return viewManagerSwitch['default']
    }
    return viewManagerSwitch[key]
  },
  'default': () => <></>,
}

export const render = ():void => {
  ReactDOM.render(
    <>
      <Router>
        <div className='main-window'>
          <Route path="/" component={ViewManager} />
        </div>
      </Router>
      <div className='console-feed-window'>
        <ConsoleFeed />
      </div>
    </>,
    document.getElementById("root")
  );
}
