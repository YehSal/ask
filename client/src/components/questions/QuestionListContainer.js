import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions';
import Loader from '../Loader';
import QuestionList from './QuestionList';

class QuestionListContainer extends Component {
  // CourseID Depends on whether the user was redirected after creating a new
  // course or the user clicked a link in the dashboard or somewhere else in the app
  componentDidMount() {
    this.props.fetchQuestions(this.props.course._id);
  }

  renderContents() {
    if (this.props.course) {
      return (
        <div>
          <QuestionList
            course={this.props.course}
            user={this.props.user}
          />
        </div>
      );
    }

    return <Loader />;
  }

  render() {
    return(
      <div>
        {this.renderContents()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    course: state.course
  };
}

export default connect(mapStateToProps, {
  fetchQuestions
})(QuestionListContainer);
