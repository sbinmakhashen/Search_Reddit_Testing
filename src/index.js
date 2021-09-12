import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { SubredditContextProvider } from './Context/SubredditContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SubredditContextProvider>
        <App />
      </SubredditContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
