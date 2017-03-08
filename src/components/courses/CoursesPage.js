import React, {PropTypes} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {
        title: ''
      }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;

    course.title = event.target.value;

    this.setState({
      course: course
    });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return (
      <h4 key={index}>{course.title}</h4>
    );
  }

  render() {
    return (
      <div>
        <h2>Courses</h2>

        {this.props.courses.map(this.courseRow)}

        <h3>Add course</h3>

        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
        <input type="submit" onClick={this.onClickSave} value="save" />

      </div>
    );
  }

}

CoursesPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
