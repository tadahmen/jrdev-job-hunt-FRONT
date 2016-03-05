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
        <footer className="footer">
          <div className="container">
            <p className="text-muted">© 2016 Codaisseur • Made with ♥ in ✖✖✖</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
