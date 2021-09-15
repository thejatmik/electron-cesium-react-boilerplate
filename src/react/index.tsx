import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ViewManager from './ViewManager';

const render = ():void => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={ViewManager} />
    </Router>,
    document.getElementById("root")
  );
}

render();
