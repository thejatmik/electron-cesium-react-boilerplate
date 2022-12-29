import React from 'react';
import ReactRouter from 'react-router-dom';

import Front from '../views/Front';
import Cesium from '../components/cesium';
import Setting from '../views/Settings';

const ViewManager = (props: ReactRouter.RouteProps): JSX.Element => {
  const name = props.location?.search.substr(1);
  // console.log(props.location.search);
  switch(name) {
    case 'cesium':
      return <Cesium key={3} />
    case 'settingToken':
      return <Setting key={2} />
    default:
      return <Front key={1} />
  }
}

export default ViewManager;
