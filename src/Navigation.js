import React from 'react';
import {Link} from 'react-router';


class Navigation extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(

        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">DevelopMe</Link>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to={`/junior_profiles`}>Juniors</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="#">My profile</Link></li>
            </ul>
          </div>
        </nav>
    );
  }
}
export default Navigation;
