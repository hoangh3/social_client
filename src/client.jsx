import React from 'react';
import ReactDOM from 'react-dom';
import HomePageRoutes from './routes/HomePageRoutes.jsx';
import 'bootstrap/dist/css/bootstrap.css';

window.onload = () => {
  ReactDOM.render(<HomePageRoutes/>, document.getElementById('main'));
};