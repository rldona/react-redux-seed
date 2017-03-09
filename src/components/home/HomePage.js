import React from 'react';

import {Link} from 'react-router';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <h1>React Redux Seed</h1>
        <p style={{margin: '40px 0'}}>React, Redux and ES6</p>
        <Link to="about" className="bnt btn-primary btn-lg">Go to About page</Link>
      </div>
    );
  }

}

export default HomePage;
