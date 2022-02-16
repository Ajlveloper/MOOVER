import React from 'react';
import ReactDOM from 'react-dom';
import AppMoover from './AppMoover';
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
    <Router>
      <AppMoover />
    </Router>,
  document.getElementById('root')
);
