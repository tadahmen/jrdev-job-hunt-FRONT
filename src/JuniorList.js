import React from 'react';
import jQuery from 'jquery';

class JuniorList extends React.Component {
  constructor(){
    super();

    this.state = {
      junior_profiles: []
    };
  }

  reloadList(event) {
    let component = this;

    jQuery.getJSON("http://localhost:8888/junior_profiles", function(data){
      // doesn't get the data yet. Because of login?
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
            <p>{junior_profile.name}</p>
          );
        })}
      </div>
    );
  }
}

export default JuniorList;
