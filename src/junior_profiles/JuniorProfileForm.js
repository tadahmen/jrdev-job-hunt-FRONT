import React from 'react';
import jQuery from 'jquery';

class JuniorProfileForm extends React.Component {
  constructor() {
    super();
  }

  createJuniorProfile(event) {
    event.preventDefault();

    let component = this;

    let junior_id = this.props.JuniorId;    //is er, zoals in rails, een manier om direct de current user te accessen
                                            // this.props.(params.)currentJuniorId bijv.?
    let name = this.refs.newJuniorProfileName.value;
    let city = this.refs.newJuniorProfileCity.value;
    // let picture = this.refs.newJuniorProfilePicture.value;
    let javascript = this.refs.newJuniorProfileJavascript.value;
    let ruby = this.refs.newJuniorProfileRuby.value;
    let rails = this.refs.newJuniorProfileRails.value;
    // let  = this.refs.newJuniorProfile.value;   //<------------------ voor al deze velden nog invullen: JuniorProfile...
    // let  = this.refs.newJuniorProfile.value;
    // let  = this.refs.newJuniorProfile.value;
    // let  = this.refs.newJuniorProfile.value;
    // let  = this.refs.newJuniorProfile.value;
    // let  = this.refs.newJuniorProfile.value;
    // let  = this.refs.newJuniorProfile.value;
    // let  = this.refs.newJuniorProfile.value;
    // let  = this.refs.newJuniorProfile.value;

    let newJuniorProfile = {
      id: null,
      junior_id: junior_id,
      name: name,
      city: city,
      javascript: javascript,
      ruby: ruby,
      rails: rails
    };
    console.log(newJuniorProfile.name)
    console.log(newJuniorProfile.ruby)

    jQuery.ajax({
      type: "POST",
      url: `https://powerful-waters-75833.herokuapp.com/junior_profiles`,
      data: JSON.stringify({
          profile: newJuniorProfile
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        component.props.onChange();
        this.props.juniorId;
        this.refs.newJuniorProfileName.value = "";
        this.refs.newJuniorProfileCity.value = "";
        //  this.refs.newJuniorProfilePicture.value = "";
        this.refs.newJuniorProfileJavascript.value = "";
        this.refs.newJuniorProfileRuby.value = "";
        this.refs.newJuniorProfileRails.value = "";
        // this.refs.newJuniorProfile.value = "";   //<------------------ voor al deze velden nog invullen: JuniorProfile...
        // this.refs.newJuniorProfile.value = "";
        // this.refs.newJuniorProfile.value = "";
        // this.refs.newJuniorProfile.value = "";
        // this.refs.newJuniorProfile.value = "";
        // this.refs.newJuniorProfile.value = "";
        // this.refs.newJuniorProfile.value = "";
        // this.refs.newJuniorProfile.value = "";
        // this.refs.newJuniorProfile.value = "";
      })

      .fail(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="well">
        <form onSubmit={this.createJuniorProfile.bind(this)}>
          <h3>Create new profile</h3>
              <input type="string" className="form-control" ref="newJuniorProfileName" placeholder="your name" />
              <br/>
              <input type="text" className="form-control" ref="newJuniorProfileCity" placeholder="your city" />
              <br/>
              "Skills:"
              <br/>
              <input type="checkbox" ref="newJuniorProfileJavascript" name="Skills" value="true" />Javascript
              <br/>
              <input type="checkbox" ref="newJuniorProfileRuby" name="Skills" value="true" />Ruby  {/*booleans also work as string in react*/}
              <br/>                                                                                {/* ?? but are stey accepted in progresql db this way?*/}
              <input type="checkbox" ref="newJuniorProfileRails" name="Skills" value="true" />Rails
              <br/>
              <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default JuniorProfileForm;
