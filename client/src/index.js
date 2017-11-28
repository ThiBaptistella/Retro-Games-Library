import '../dist/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

// API key from filepicker
filepicker.setKey("AUGRkihwkQ2ik0jMMVaoPz");

// views are rendered inside the client/dist/index.html = #content div
ReactDOM.render(
  Routes,
  document.getElementById('content')
);
