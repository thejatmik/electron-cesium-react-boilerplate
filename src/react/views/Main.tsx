import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Main = (): JSX.Element => {
  return (
    <>
      <h1>Hello</h1>
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
