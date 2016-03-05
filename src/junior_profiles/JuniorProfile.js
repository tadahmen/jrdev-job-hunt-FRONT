import React from 'react';
import jQuery from 'jquery';

class JuniorProfile extends React.Component {
  constructor(){
    super();

    this.state = {
      junior_profile: []
    }
  }

  renderProfile(){
    let component = this;

    jQuery.getJSON(`https://powerful-waters-75833.herokuapp.com//junior_profiles/${this.props.params.profileId}.json`, function(data){
      console.log("Getting the junior profile...");
      console.log(data);
      component.setState({
        junior_profile: data.junior_profile
      })
    })

  }

  componentDidMount(){
    this.renderProfile();
    console.log(this.state.junior_profile);
  }

  render(){
    return(
      <div>
        <h1>{this.state.junior_profile.name}</h1>
        <p>{this.state.junior_profile.city}</p>
        <p>Ruby: {this.state.junior_profile.ruby}</p>
      </div>
    );
  }

}
export default JuniorProfile;
