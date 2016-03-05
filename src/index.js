import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './App';
import CompanyProfileList from './company_profiles/CompanyProfileList';
import CompanyProfile from './company_profiles/CompanyProfile';
import JuniorProfileList from './junior_profiles/JuniorProfileList';
import JuniorProfile from './junior_profiles/JuniorProfile';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={CompanyProfileList} />
      <Route path="/company_profiles/:profileId" component={CompanyProfile} />
      <Route path="/junior_profiles" component={JuniorProfileList} />
      <Route path="/junior_profiles/:profileId" component={JuniorProfile} />
    </Route>
  </Router>
), document.getElementById('root'));
