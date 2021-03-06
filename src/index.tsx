import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import Header from './store/reducers/header'
import Auth from './store/reducers/auth'
import Modal from './store/reducers/modal'

const rootReducer = combineReducers({
  header: Header,
  auth: Auth,
  modal: Modal
});

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
