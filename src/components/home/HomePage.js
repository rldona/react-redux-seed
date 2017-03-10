import React from 'react';

import Paper from 'material-ui/Paper';

import {Link} from 'react-router';

class HomePage extends React.Component {

  render() {

    const style = {margin: 20, padding: 20};

    return (
      <Paper style={style} zDepth={1}>
        <h1>React Redux Seed</h1>
        <p style={{margin: '40px 0'}}>React, Redux and ES6</p>
        <Link to="about" className="bnt btn-primary btn-lg">Go to About page</Link>
      </Paper>
    );
  }

}

export default HomePage;
