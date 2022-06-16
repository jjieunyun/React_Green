import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { applyMiddleware, createStore  } from 'redux';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './modules';
// import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger()
const store = createStore(
  rootReducer, 
  applyMiddleware(logger,sagaMiddleware),
  sagaMiddleware.run(rootSaga)
  )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
    </Provider>
  </React.StrictMode>
);
