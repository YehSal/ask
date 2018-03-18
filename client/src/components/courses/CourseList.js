import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../actions';

class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  renderCourses() {
    return this.props.courses.map(course => {
      return (
        <div>
          <h5>{course.title}</h5>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderCourses()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { courses: state.courses };
}

export default connect(mapStateToProps, { fetchCourses })(CourseList);
