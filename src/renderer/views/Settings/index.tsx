import React from 'react';
import {useHistory} from 'react-router-dom';
import classNames from 'classnames';

import Token from './token';

import './settings.css';

const Setting = (): React.ReactElement => {
  const history = useHistory();

  return (
    <div
      className={classNames(
        'setting-container', 'setting-container-flex'
      )}
      style={{
        backgroundColor: '#858585',
      }}
    >
      <div
        className='setting-container-component-top'
      >
        <h2>
          <span
            className='setting-item-button'
            style={{
              cursor: 'pointer',
            }}
            onClick={() => {
              history.goBack()
            }}
          >{'< '}</span>Application Settings
        </h2>
      </div>
      <div
        className='setting-container-component-middle'
      >
        <Token />
      </div>
    </div>
  )
}

export default Setting;
