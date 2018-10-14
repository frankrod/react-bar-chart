import { createStore } from 'redux';
import { State, reducer } from '../reducers';

const store = createStore<State, any, any, any>(
  reducer, /* preloadedState, */
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;
