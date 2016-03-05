import React from 'react';
import './stylesheets/components.scss';
import Navigation from './Navigation';

class App extends React.Component {

  constructor(){
    super();

  }

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
