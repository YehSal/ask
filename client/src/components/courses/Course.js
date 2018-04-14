import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

class Course extends Component {
  constructor(props) {
    super(props);

    this.state = { showPassword: true };
    this.renderPassword = this.renderPassword.bind(this);
  }

  // Show or hide password
  renderPassword() {
    if (this.state.showPassword) {
      return (
        <div >
          <RaisedButton
            secondary={true}
            labelPosition="before"
            label='Hide Password'
            onClick={() => this.setState({ showPassword: false })}

          />
          <h3 style={{display:'inline', marginLeft:10}}>Password: {this.props.course.password}</h3>
          <Divider style={{display: 'block', width: '100%', marginTop:10}} />
        </div>
      );
    }

    return (
      <div>
        <RaisedButton
          primary={true}
          labelPosition="before"
          label='Show Password'
          onClick={() => this.setState({ showPassword: true })}
        />

        <Divider style={{display: 'block', width: '100%', marginTop:10}}/>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>Course Title: {this.props.course.title}</h3>
        <h3>Instructor: {this.props.course.instructorName}</h3>
        {this.renderPassword()}
      </div>
    );
  }
}

export default Course;
