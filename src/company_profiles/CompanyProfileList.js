import React from 'react';
import jQuery from 'jquery';

class CompanyProfileList extends React.Component {
  constructor(){
    super();

    this.state = {
      company_profiles: []
    };
  }

  reloadList(event) {
    let component = this;

    jQuery.getJSON("http://localhost:8888/company_profiles.json", function(data){
      component.setState({
        company_profiles: data
      });
    });
  }

  componentDidMount() {
    this.reloadList();
  }

  render(){
    return(
      <div>
        <h1>CompanyList</h1>

        {this.state.company_profiles.map(function(company_profile, i) {
          return(
            <p>{company_profile.name}</p>
          );
        })}
      </div>
    );
  }
}

export default CompanyProfileList;
