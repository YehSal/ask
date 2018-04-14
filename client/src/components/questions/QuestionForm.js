import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import QuestionField from '../questions/QuestionField';
import { submitQuestion } from '../../actions';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';


class QuestionForm extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler() {
    this.props.submitQuestion(
      this.props.formValues,
      this.props.course._id,
      this.props.fetchQuestions
    );
  }

  renderFields() {
    return (
      <div>
        <Field
          label="Question Body"
          type="text"
          name="questionBody"
          component={QuestionField}
        />
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submitHandler)} style={{textAlign: 'center'}}>
        {this.renderFields()}
        <RaisedButton
          label="Submit Question"
          labelPosition="before"
          primary={true}
          icon={<Done />}
          type='submit'
        />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  var badWord = /crap|ugly|brat|fool|fuck|fucking|f\*cking|f\*ck|bitch|b\*tch|shit|sh\*t|fool|dumb|couch potato|arse|arsehole|asshole|\*ssh\*l\*|\*\*\*\*|c\*ck|\*\*\*\*sucker|c\*cks\*ck\*r|\*\*\*\*|c\*nt|dickhead|d\*c\*h\*a\*|\*\*\*\*|f\*c\*|\*\*\*\*wit|f\*ckw\*t|fuk|f\*k|fuking|f\*k\*ng|mother\*\*\*\*er|m\*th\*rf\*ck\*r|\*\*\*\*\*\*|n\*gg\*r|pussy|p\*ssy|\*\*\*\*|sh\*t|wanker|w\*nk\*r|wankers|w\*nk\*rs|whore|wh\*r\*|slag| sl\*g|\*\*\*\*\*|b\*tch|f u c k|f\*c\*|b.i.t.c.h|b\*tch|d-i-c-k|d\*\*\*/gi;

  if (badWord.test(values.questionBody)) {
    errors.questionBody = 'Inappropriate expressions are not allowed';
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    course: state.course,
    question: state.question,
    formValues: state.form.questionForm ? state.form.questionForm.values : false,
    questions: state.questions
  };
}

export default reduxForm({
  validate,
  form: 'questionForm',
  destroyOnUnmount: false
})(connect(mapStateToProps, { submitQuestion })(QuestionForm))
