import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import notedata from './notesdata.js';

//
//Check to see if we have any notes in localStorage. If not fill with tutorial
//notes.
//
let localNotes = window.localStorage.getItem('notes');

if (localNotes === null | localNotes === "[]") {
  window.localStorage.setItem('notes', JSON.stringify(notedata) );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
