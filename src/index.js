import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import CompanyAccount from './companies/CompanyAccount';
import CompanyProfile from './company_profiles/CompanyProfile';
import JuniorList from './JuniorList';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/company_profiles/:profileId" component={CompanyProfile}/>
      <Route path="/juniors" component={JuniorList}/>
    </Route>
  </Router>
), document.getElementById('root'));
