import React from 'react';
import ReactRouter from 'react-router-dom';

import { viewManagerSwitch } from '../';

const ViewManager = (props: ReactRouter.RouteProps): JSX.Element => {
  const name = props.location?.search.substring(1);
  // console.log(props.location.search);
  let Element = viewManagerSwitch.get(name);
  return (<Element key={1} />)
}

export default ViewManager;
