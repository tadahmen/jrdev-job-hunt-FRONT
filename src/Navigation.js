import React from 'react';
import {Link} from 'react-router';

class Navigation extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <nav>
        <Link to={`/account/1`}>Your Account</Link>
        <Link to={`/company_profiles`}>Company Profiles</Link>
        <Link to={`/junior_profiles`}>Junior Profiles</Link>
      </nav>
    );
  }
}
export default Navigation;
