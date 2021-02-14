import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/bootstrap.css';
import './assets/css/main.css';
import { BrowserRouter } from "react-router-dom";
import 'assets/js/main.js'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

