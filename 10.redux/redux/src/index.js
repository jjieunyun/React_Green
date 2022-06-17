import React from "react";
// 리덕스의 스토어 작성
// 미들웨어 추가를 위한 applyMiddleware
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// 리덕스 값을 확인하기위한 dev툴 - 크롭확장앱도 설치해야함
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import rootReducer, { rootSaga } from "./modules";
//import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


