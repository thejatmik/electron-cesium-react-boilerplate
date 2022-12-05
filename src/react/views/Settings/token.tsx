import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

const { invoke } = window.store;

const Token = (): JSX.Element => {
  const [token, setToken] = useState('');
  const history = useHistory();

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
    history.goBack();
  }

  return (
    <div
      style={{
        display: 'flex column',
        justifyContent: 'center',
      }}
    >
      <form
        style={{
          textAlign: 'center',
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <label
            style={{
              fontSize: 'large',
            }}
          >Input Cesium Ion Token </label>
          <textarea
            rows={4}
            cols={50}
            placeholder="Cesium token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            style={{
              padding: '0.5rem',
              fontSize: 'large',
              resize: 'none',
            }}
          />
        </div>
        <input
          className='setting-item-button'
          type='submit' value='Done'
        />
      </form>
    </div>
  )
}

export default Token;
