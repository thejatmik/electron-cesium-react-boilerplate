import React, { useState, useEffect } from 'react';

const { invoke } = window.store;

const Token = (): JSX.Element => {
  const [token, setToken] = useState('');

  const updateToken = async () => {
    let storeToken = await invoke({
      name: 'cesium',
      method: 'getIonToken',
    });

    setToken(storeToken);
  }

  useEffect(() => {
    updateToken()
  }, []);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    invoke({
      name: 'cesium',
      method: 'setIonToken',
      params: token,
    })
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
    >
      <label>Input Cesium Ion Token</label>
      <input
        type="text"
        placeholder="Cesium token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
    </form>
  )
}

export default Token;
