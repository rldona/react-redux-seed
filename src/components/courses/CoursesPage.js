import React, {PropTypes} from 'react';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';

import Paper from 'material-ui/Paper';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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

    this.floatingLabelFixed = true;
    this.buttonSecondary    = true;

    this.setState({
      course: course
    });
  }

  onClickSave() {
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return (
      <ListItem
        key={index}
        leftCheckbox={<Checkbox />}
        primaryText={course.title} />
    );
  }

  render() {

    const style = {margin: 10, padding: 20};
    const styleButton = {margin: 10};

    return (
      <div>
        <Paper style={style} zDepth={1}>
          <TextField
            onChange={this.onTitleChange}
            value={this.state.course.title}
            hintText="Add your favorite course"
            floatingLabelText="Favorite course"
            floatingLabelFixed={this.floatingLabelFixed}
            fullWidth={false}
            />
          <RaisedButton label="Add course" type="submit" secondary={this.buttonSecondary} style={styleButton} onClick={this.onClickSave} value="save" />
        </Paper>

        <Paper style={style} zDepth={0}>
          <List>
            {this.props.courses.map(this.courseRow)}
          </List>
        </Paper>
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
