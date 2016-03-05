import React from 'react';
import {Link} from 'react-router';


class Navigation extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <nav>
        <a href="https://powerful-waters-75833.herokuapp.com/companies/edit">Edit Your Account</a>
        <span> </span>
        <Link to={`/junior_profiles`}>Junior Profiles </Link>
      </nav>
    );
  }
}
export default Navigation;
