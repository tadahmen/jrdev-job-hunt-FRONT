import React from 'react';
import jQuery from 'jquery';

class YourAccount extends React.Component{
  constructor(){
    super();

    this.state = {
      user: [],
      skills: [
          "coffeescript",
          "cplusplus",
          "csharp",
          "java",
          "javascript",
          "jquery",
          "net",
          "node",
          "php",
          "rails",
          "react",
          "ruby"
      ],
      skill_set: []
    }
  }

  componentWillMount(){
    let component = this;

    jQuery.ajax({
      method: "GET",
      url: "https://developme.herokuapp.com/junior_profiles/1.json"
    }).done(function(data){
      console.log(data);
      var skillz = [];

      component.state.skills.forEach(function(skill){
        if(data.junior_profile[skill]){
          skillz.push(skill);
        }
      })

      component.setState({
        user:{
              id: data.junior_profile.id,
              email: data.junior_profile.email,
              name: data.junior_profile.name,
              city: data.junior_profile.city,
              skill_set: skillz
        }
      });
    }).fail(function(data){
      console.log(data);
    })


  }

  render(){
    return(
      <div>
        <h1>Your Account</h1>
        <h2>{this.state.user.name}</h2>
        <section id="info">
          <p>Email: {this.state.user.email}</p>
          <p>City: {this.state.user.city}</p>
        </section>
        <section id="skills">
          <h3>My skills<br />
            {this.state.user.skill_set.map(function(skill, i) {
              return(
                  <span key={i} className="label label-danger">{skill}</span>
              );
              })}
          </h3>
        </section>
      </div>
    );
  }
}
export default YourAccount;
