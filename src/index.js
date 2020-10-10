import React from 'react';
import { render } from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";


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
    <Auth0Provider
      domain={"dev-u1xyhg6l.eu.auth0.com"}
      clientId={"qI4N3yrxGFMz2dFSDETCaoJ3MFEY1TdS"}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Provider>
  , document.querySelector('#app')
);