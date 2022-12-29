import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import { Console, Hook, Unhook } from 'console-feed';

import './consoleFeed.css';

const ConsoleFeed = (): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const hookedConsole = Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false,
    );

    return () => {
      Unhook(hookedConsole);
    }
  }, []);

  return toggle ? <div
    className={classNames('console-feed', {
      'console-feed-display-none': !toggle,
    })}
  >
    <Console logs={logs} />
    <button
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
      }}
      onClick={() => {
        setToggle(false);
      }}
    >Hide Logs</button>
  </div> : 

  <button
    style={{
      right: 0,
      bottom: 0,
      position: 'absolute',
    }}
    className={classNames({
      'console-feed-display-none': toggle,
    })}
    onClick={() => {
      setToggle(true);
    }}
  >Show Logs</button>
}

export default ConsoleFeed;
