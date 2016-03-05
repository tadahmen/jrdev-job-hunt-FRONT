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

    jQuery.getJSON("https://developme.herokuapp.com/junior_profiles", function(data){
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
        <h1>Juniors</h1>

        {this.state.junior_profiles.map(function(junior_profile, i) {
          return(
            <div className="well" key={i}>
              <h2><Link to={`/junior_profiles/${junior_profile.id}`}>{junior_profile.name}</Link></h2>
              <p>{junior_profile.city}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default JuniorProfileList;
