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

    jQuery.getJSON(`https://developme.herokuapp.com/company_profiles/${this.props.params.profileId}.json`, function(data){
      console.log("Getting the company profile...");
      console.log(data);
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
        <p>
          <strong>Size:</strong> {this.state.company_profile.size}<br />
          <strong>Salary indication:</strong> {this.state.company_profile.salary_indication}<br />
          <strong>Jr/Sr ratio:</strong> {this.state.company_profile.jr_sr_ratio}
        </p>
      </div>
    );
  }

}
export default CompanyProfile;
