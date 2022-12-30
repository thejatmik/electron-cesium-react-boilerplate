import React from 'react';

const { notif } = window.hello || {};

const Hello = (): React.ReactElement => {
  const handleClick = () => {
    console.log(window);
    notif('lele');
  }

  return <>
    <button onClick={handleClick}>Yes</button>
  </>
}

export default Hello;
