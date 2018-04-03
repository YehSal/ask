import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../actions';
import CourseList from './CourseList';

class CourseListContainer extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    return <CourseList courses={this.props.courses}/>;
  }
}

function mapStateToProps(state) {
  return { courses: state.courses };
}

export default connect(mapStateToProps, { fetchCourses })(CourseListContainer);
