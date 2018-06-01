import React from "react";
import ReactDOM from "react-dom";
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Routes from './routes';
import 'antd/dist/antd.min.css';
import './App/style/main.scss';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, 
document.getElementById("root"));