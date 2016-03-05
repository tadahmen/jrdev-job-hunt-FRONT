import React from 'react';
import jQuery from 'jquery';
import './stylesheets/components.scss';
import Navigation from './Navigation';

class App extends React.Component {

  // constructor(){
  //   super();
  //
  //   this.state = {
  //     signedIn: null
  //   }
  // }
  // componentWillMount(){
  //   let component = this;
  //
  //   jQuery.ajax({
  //     method: "GET",
  //     url: "http://localhost:8888/auth/is_signed_in"
  //   }).done(function(data){
  //     console.log(data);
  //     console.log("yes, checked auth");
  //     component.setState({
  //       signedIn: data.signed_in
  //     });
  //   }).fail(function(data){
  //     console.log(data);
  //   })
  // }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
