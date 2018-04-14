import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCourses } from '../../actions';
import CourseList from './CourseList';
import Loader from '../Loader';

class CourseListContainer extends Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {
    if (this.props.courses) {
      return <CourseList courses={this.props.courses}/>;
    }

    return <Loader />;
  }
}

function mapStateToProps(state) {
  return { courses: state.courses };
}

export default connect(mapStateToProps, { fetchCourses })(CourseListContainer);
