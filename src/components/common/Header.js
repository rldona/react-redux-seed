import React, {Component, PropTypes} from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {Link, IndexLink} from 'react-router';

import AppBar from 'material-ui/AppBar';

export default class Header extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {open: false};

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose  = this.handleClose.bind(this);
    this.open         = this.open.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  open(open) {
    this.setState({open});
  }

  render() {

    return (
      <div>

        <AppBar
          title="Course list"
          onTouchTap={this.handleToggle}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={this.open}>
            <div style={{padding: 20}}>
              <MenuItem onTouchTap={this.handleClose}>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>
                <Link to="/courses" activeClassName="active">Courses ({this.props.courses.length})</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>
                <Link to="/about" activeClassName="active">About</Link>
            </MenuItem>
            </div>
        </Drawer>

      </div>
    );

  }

}

Header.propTypes = {
  courses: PropTypes.array.isRequired
};
