import React from 'react';
import ReactRouter from 'react-router-dom';

import Main from '../views/Main';
import Cesium from '../components/cesium';
import SettingToken from '../views/Settings/token';

const ViewManager = (props: ReactRouter.RouteProps): JSX.Element => {
  const name = props.location.search.substr(1);
  console.log(props.location.search);
  switch(name) {
    case 'cesium':
      return <Cesium />
    case 'settingToken':
      return <SettingToken />
    default:
      return <Main />
  }
}

export default ViewManager;
