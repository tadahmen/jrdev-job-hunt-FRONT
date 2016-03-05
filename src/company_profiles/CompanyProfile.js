import React from 'react';
import jQuery from 'jquery';

class CompanyProfile extends React.Component {
  constructor(){
    super();

    this.state = {
      company_profile: []
    }
  }

  renderProfile(){
    let component = this;

    jQuery.getJSON(`https://powerful-waters-75833.herokuapp.com/company_profiles/${this.props.params.profileId}.json`, function(data){
      console.log(data);
      console.log("getting a profile");
      component.setState({
        company_profile: data.company_profile
      })
    })
  }

  componentDidMount(){
    this.renderProfile();
  }

  render(){
    return(
      <div>
        <h1>{this.state.company_profile.name}</h1>
        <p>{this.state.company_profile.description}</p>
      </div>
    );
  }

}
export default CompanyProfile;
