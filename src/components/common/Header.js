import React, {PropTypes} from 'react';

import {Link, IndexLink} from 'react-router';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/actionsTypes';

const Header = (props) => {

  let {courses} = props;

  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {' | '}
      <Link to="/courses" activeClassName="active">Courses ({courses.length})</Link>
      {' | '}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );

};

Header.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
     courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);