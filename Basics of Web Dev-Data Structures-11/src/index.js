import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //For Functional Based Components

import AppClass from './AppClass'; //For Class Based Componenets

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*Render Both HERE*/}
    <App />
    <AppClass /> 
  </React.StrictMode>
);


