import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import StatefulHello from './components/StatefulHello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <StatefulHello name="TypeScript" enthusiasmLevel={1} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
