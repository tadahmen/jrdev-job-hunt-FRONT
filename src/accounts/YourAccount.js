import React from 'react';
import jQuery from 'jquery';

class YourAccount extends React.Component{
  constructor(){
    super();

    this.state = {
      user: []
    }
  }

  componentWillMount(){
    let component = this;

    jQuery.ajax({
      method: "GET",
      url: "https://powerful-waters-75833.herokuapp.com/junior_profiles/1.json"
    }).done(function(data){
      console.log(data);
      component.setState({
        user:{
              id: data.junior_profile.id,
              email: data.junior_profile.email,
              name: data.junior_profile.name,
              city: data.junior_profile.city,
              coffeescript: data.junior_profile.coffeescript,
              cplusplus: data.junior_profile.cplusplus,
              csharp: data.junior_profile.csharp,
              java: data.junior_profile.java,
              javascript: data.junior_profile.javascript,
              jquery: data.junior_profile.jquery,
              net: data.junior_profile.net,
              node: data.junior_profile.node,
              php: data.junior_profile.php,
              rails: data.junior_profile.rails,
              react: data.junior_profile.react,
              ruby: data.junior_profile.ruby
        }
      });
    }).fail(function(data){
      console.log(data);
    })

    // checkSkills(skill){
    //
    // }
  }

  render(){
    return(
      <div>
        <h1>Your Account</h1>
        <h2>{this.state.user.name}</h2>
        <section id="info">
          <p>{this.state.user.email}</p>
          <p>{this.state.user.city}</p>
        </section>
        <section id="skills">
        {console.log(this.state.user)}
          <span>{this.state.user.coffeescript}</span>
          <span>{this.state.user.cplusplus}</span>
          <span>{this.state.user.csharp}</span>
          <span>{this.state.user.java}</span>
          <span>{this.state.user.javascript}</span>
          <span>{this.state.user.jquery}</span>
          <span>{this.state.user.net}</span>
          <span>{this.state.user.node}</span>
          <span>{this.state.user.php}</span>
          <span>{this.state.user.rails}</span>
          <span>{this.state.user.react}</span>
          <span>{this.state.user.ruby}</span>
        </section>

      </div>
    );
  }
}
export default YourAccount;
