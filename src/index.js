import React from 'react';
import { render } from 'react-dom';


// Redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { watcherSagas } from './sagas/weather_saga';

import Log from './middlewares/log';

import App from './App';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(Log, sagaMiddleware));

sagaMiddleware.run(watcherSagas);

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.querySelector('#app')
);