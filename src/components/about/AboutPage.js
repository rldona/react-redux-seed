import React, {PropTypes} from 'react';

import Paper from 'material-ui/Paper';

import {Link} from 'react-router';

import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24
};


class AboutPage extends React.Component {

  render() {

    const style = {margin: 20, padding: 20};

    return (
      <Paper style={style} zDepth={1}>
        <h2>About page</h2>
        <p style={{margin: '40px 0'}}>About page descripion</p>
        <Link to="/" className="bnt btn-primary btn-lg">Go to Home page</Link>
      </Paper>
    );
  }

}

export default AboutPage;
