// Display the course info
import React, { Component } from 'react';

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
        <div>
          <h3>Password: {this.props.course.password}</h3>
          <button onClick={() => this.setState({ showPassword: false })}>
            Hide Password
          </button>
        </div>
      );
    }

    return (
      <div>
        <button onClick={() => this.setState({ showPassword: true })}>
          Show Password
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>Course Title: {this.props.course.title}</h3>
        {this.renderPassword()}
      </div>
    );
  }
}

export default Course;
