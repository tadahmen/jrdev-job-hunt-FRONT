import React from 'react';
import jQuery from 'jquery';
import { Link } from 'react-router';

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
            <div key={i}>
              <h2><Link to={`/company_profiles/${company_profile.id}`}>{company_profile.name}</Link></h2>
              <p>{company_profile.description}</p>
              <p>
                <strong>Size:</strong> {company_profile.size} |
                <strong>Salary indication:</strong> {company_profile.salary_indication} |
                <strong>Jr/Sr ratio:</strong> {company_profile.jr_sr_ratio}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CompanyProfileList;
