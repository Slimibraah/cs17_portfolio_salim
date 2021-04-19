import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import './style/style.scss'
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/js/all';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);