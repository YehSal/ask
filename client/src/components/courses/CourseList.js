import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../../actions';

class CourseList extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  renderCourses() {
    return this.props.courses.map(course => {
      return (
        <div key={course._id}>
          <Link to={{
            pathname: `/course/{course._id}`,
            state: { courseID: course._id }
          }}>
            <h5>{course.title}</h5>
          </Link>
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
