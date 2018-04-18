import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editQuestion } from '../../actions';
import QuestionField from '../questions/QuestionField';
import RaisedButton from 'material-ui/RaisedButton';
import { reduxForm, Field } from 'redux-form';
import Done from 'material-ui/svg-icons/action/done';

class QuestionEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = { open: this.props.open }
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler() {
    this.setState({ open: false });
    this.props.editQuestion(
      this.props.course._id,
      this.props.question._id,
      this.props.formValues
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
          {this.renderFields(this.props.question.body)}
          <RaisedButton
            label="Edit Question"
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
  var badWord = /cunt|crap|ugly|brat|fool|fuck|fucking|f\*cking|f\*ck|bitch|b\*tch|shit|sh\*t|fool|dumb|couch potato|arse|arsehole|asshole|\*ssh\*l\*|\*\*\*\*|c\*ck|\*\*\*\*sucker|c\*cks\*ck\*r|\*\*\*\*|c\*nt|dickhead|d\*c\*h\*a\*|\*\*\*\*|f\*c\*|\*\*\*\*wit|f\*ckw\*t|fuk|f\*k|fuking|f\*k\*ng|mother\*\*\*\*er|m\*th\*rf\*ck\*r|\*\*\*\*\*\*|n\*gg\*r|pussy|p\*ssy|\*\*\*\*|sh\*t|wanker|w\*nk\*r|wankers|w\*nk\*rs|whore|wh\*r\*|slag| sl\*g|\*\*\*\*\*|b\*tch|f u c k|f\*c\*|b.i.t.c.h|b\*tch|d-i-c-k|d\*\*\*/gi;

  if (badWord.test(values.questionBody)) {
    errors.questionBody = 'Inappropriate expressions are not allowed';
  }

  return errors;
}


function mapStateToProps(state, props) {
  return {
    formValues: state.form.questionEditForm ? state.form.questionEditForm.values : false,
    initialValues: {
      questionBody: props.question ? props.question.body : ''
    }
  };
}

export default connect(mapStateToProps, { editQuestion })(reduxForm({
  validate,
  form: 'questionEditForm',
  enableReinitialize: true
})(QuestionEditForm));
