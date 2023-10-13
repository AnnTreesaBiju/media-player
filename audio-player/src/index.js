import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* for routnig :- we must wrap all contents inside:- BrowserRouter*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>


  </React.StrictMode>
);


