import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from './components/main';

import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);