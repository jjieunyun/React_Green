import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { applyMiddleware, createStore  } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
// import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger'


const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(logger))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
    </Provider>
  </React.StrictMode>
);