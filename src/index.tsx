import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ChartApp from './containers/ChartApp';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <ChartApp />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
