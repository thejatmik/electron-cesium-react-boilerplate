import * as ReactDOM from 'react-dom';
import App from './App';

const render = ():void => {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
}

render();
