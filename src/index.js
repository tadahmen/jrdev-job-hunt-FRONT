import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      {/*<Route path="/projects" component={Projects}/>*/}

    </Route>
  </Router>
), document.getElementById('root'));
