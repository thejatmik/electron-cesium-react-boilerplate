import * as ReactDOM from 'react-dom';
import App from './app';

const render = ():void => {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
}

render();
