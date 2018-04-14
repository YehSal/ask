import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../actions';
import Loader from '../Loader';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';

class QuestionListContainer extends Component {
  // CourseID Depends on whether the user was redirected after creating a new
  // course or the user clicked a link in the dashboard or somewhere else in the app
  componentDidMount() {
    this.props.fetchQuestions(this.props.course._id);
  }

  renderContents() {
    // console.log('QuestionListContainer - before: ', this.props.course);
    if (this.props.course) {
      // console.log('QuestionListContainer: ', this.props.questions);
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
        {/* <QuestionForm /> */}
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
