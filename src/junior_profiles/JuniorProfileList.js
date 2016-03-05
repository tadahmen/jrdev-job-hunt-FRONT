import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

class JuniorProfileList extends React.Component {
  constructor(){
    super();

    this.state = {
      junior_profiles: []
    };
  }

  reloadList(event) {
    let component = this;

    jQuery.getJSON("https://powerful-waters-75833.herokuapp.com/junior_profiles", function(data){
      console.log("Getting junior profile list...");
      console.log(data);
      component.setState({
        junior_profiles: data.junior_profiles
      });
    });
  }

  componentDidMount() {
    this.reloadList();
  }

  render(){
    return(
      <div>
        <h1>JuniorList</h1>

        {this.state.junior_profiles.map(function(junior_profile, i) {
          return(
            <p><Link to={`/junior_profiles/${junior_profile.id}`}>{junior_profile.name}</Link></p>
          );
        })}
      </div>
    );
  }
}

export default JuniorProfileList;
