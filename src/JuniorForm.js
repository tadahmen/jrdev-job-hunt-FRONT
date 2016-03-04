import React from 'react';
import jQuery from 'jquery';

class JuniorForm extends React.Component {
  constructor() {
    super();
  }

  createJunior(event) {
    event.preventDefault();

    let component = this;

    let junior_id =this.props.juniorId;
    let name = this.refs.newJuniorName.value;
    let city = this.refs.newJuniorCity.value;
    // let picture = this.refs.newJuniorPicture.value;
    let javascript = this.refs.newJuniorJavascript.value;
    let ruby = this.refs.newJuniorRuby.value;
    let rails = this.refs.newJuniorRails.value;
    // let  = this.refs.newJuniorCity.value;
    // let  = this.refs.newJuniorCity.value;
    // let  = this.refs.newJuniorCity.value;
    // let  = this.refs.newJuniorCity.value;
    // let  = this.refs.newJuniorCity.value;
    // let  = this.refs.newJuniorCity.value;
    // let  = this.refs.newJuniorCity.value;
    // let  = this.refs.newJuniorCity.value;
    // let  = this.refs.newJuniorCity.value;

    let newJunior = {
      id: null,
      junior_id: junior_id,
      name: name,
      city: city,
      javascript: javascript,
      ruby: ruby,
      rails: rails
    };

    jQuery.ajax({
      type: "POST",
      url: `http://localhost:5000/profiles/${junior_id}.json`,
      data: JSON.stringify({
          profile: newJunior
      }),
      contentType: "application/json",
      dataType: "json"
    })
      .done(function(data) {
        component.props.onChange();
        component.refs.newJuniorInput.value = "";
        component.refs.newJuniorDescription.value = "";
      })

      .fail(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="well">
        <form onSubmit={this.createJunior.bind(this)}>
          <h3>Create new profile</h3>
              <input type="text" className="form-control" ref="newJuniorName" placeholder="your name" />
              <br/>
              <input type="text" className="form-control" ref="newJuniorCity" placeholder="your city" />
              <br/>
              "Skills:"
              <br/>
              <input type="checkbox" ref="newJuniorJavascript" name="Skills" value="true" />Javascript
              <br/>
              <input type="checkbox" ref="newJuniorRuby" name="Skills" value="true" />Ruby
              <br/>
              <input type="checkbox" ref="newJuniorRails" name="Skills" value="true" />Rails
              <br/>
              <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default JuniorForm;
