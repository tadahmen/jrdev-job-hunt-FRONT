import React from 'react';
import {Link} from 'react-router';


class Navigation extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <nav>
        <span><Link to={`/company_profiles`}>Company Profiles</Link> </span>
        <span><Link to={`/junior_profiles`}>Junior Profiles</Link> </span>
      </nav>
    );
  }
}
export default Navigation;
