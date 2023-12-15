import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import reportWebVitals from './reportWebVitals';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import counterReducer from './Features/Counter/CounterSlice';
import FetchDataReducer from './Features/FetchData/FetchDataSlice';

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const rootReducer = combineReducers({
  counter: counterReducer,
  fetch: FetchDataReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk], //allows you to write action creators that return a function instead of an action
  composeEnhancer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
