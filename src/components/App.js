import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../actions/actionsTypes';

import Header from './common/Header';

const App = ({courses, children}) => {

  // const {courses, children} = props;

  return (
    <div>
      <Header title="Header component" courses={courses} />
      {children}
    </div>
  );

};

App.propTypes = {
  children: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
