import React from 'react';

const Token = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
    >
      <label>Input Cesium Ion Token</label>
      <input type="text" placeholder="Cesium token" />
    </form>
  )
}

export default Token;
