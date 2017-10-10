import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

const getInitialState = () => {
  const item = localStorage.getItem('tabsChallenge');

  if (item) {
    return JSON.parse(item);
  }

  return undefined;
}

const store = createStore(reducer, getInitialState());

store.subscribe(() => {
  localStorage.setItem('tabsChallenge', JSON.stringify(store.getState()));
});

const Challenge = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Challenge />, document.getElementById('root'));
registerServiceWorker();
