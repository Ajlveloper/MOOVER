import React from 'react';
import ReactDOM from 'react-dom';
import AppMoover from './AppMoover';
import { BrowserRouter as Router } from 'react-router-dom'
import axios from "axios";


axios.defaults.baseURL = process.env.REACT_APP_PORT || "http://localhost:3001";
ReactDOM.render(
    <Router>
      <AppMoover />
    </Router>,
  document.getElementById('root')
);
