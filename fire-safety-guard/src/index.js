import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM directly from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
import './index.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS with file extension
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
