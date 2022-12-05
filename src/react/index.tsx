import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import ViewManager from './ViewManager';
import ConsoleFeed from './components/ConsoleFeed';

import './index.css';

const render = ():void => {
  ReactDOM.render(
    <Router>
      <div className='main-window'>
        <Route path="/" component={ViewManager} />
      </div>
      <div className='console-feed-window'>
        <ConsoleFeed />
      </div>
    </Router>,
    document.getElementById("root")
  );
}

render();
