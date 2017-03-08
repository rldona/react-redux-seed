import React, {PropTypes} from 'react';

import {Link} from 'react-router';

class AboutPage extends React.Component {

  render() {
    return (
      <div className="jumbotron">
        <h2>About page</h2>
        <p>About page descripion</p>
        <Link to="/" className="bnt btn-primary btn-lg">Go to About page</Link>
      </div>
    );
  }

}

export default AboutPage;
