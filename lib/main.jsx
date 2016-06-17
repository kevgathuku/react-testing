import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import Gravatar from './gravatar.jsx';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Gravatar} >
    </Route>
  </Router>), document.getElementById('root'));
