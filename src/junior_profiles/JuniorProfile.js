import React from 'react';
import jQuery from 'jquery';

class JuniorProfile extends React.Component {
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
      url: `https://powerful-waters-75833.herokuapp.com//junior_profiles/${this.props.params.profileId}.json`
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
        <h1>{this.state.user.name}</h1>
        <p>{this.state.user.city}</p>

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
export default JuniorProfile;
