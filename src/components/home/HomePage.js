import React from 'react';

import {Link} from 'react-router';

class HomePage extends React.Component {

  render() {
    return (
      <div className="jumbotron">
        <h1>React Redux Seed</h1>
        <p>Reac, Redux and ES6</p>
        <Link to="about" className="bnt btn-primary btn-lg">Go to About page</Link>
      </div>
    );
  }

}

export default HomePage;
