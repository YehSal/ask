import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';
import LandingRoleField from './LandingRoleField';
import { chooseRole } from '../../actions';

class LandingRoleForm extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  renderFields() {
    return(
      <div>
        <Field
          type="radio"
          name="userRole"
          component={LandingRoleField}
        />
      </div>
    );
  }

  submitHandler() {
    this.props.chooseRole(this.props.formValues);
  }

  render() {
    return (
      <div>
        Are you a student or an instructor?
        <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
          {this.renderFields()}
          <RaisedButton
            label="Submit"
            labelPosition="before"
            primary={true}
            icon={<Done />}
            type='submit'
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.landingRoleForm ? state.form.landingRoleForm.values : false };
}

export default reduxForm({
  form: 'landingRoleForm',
  destroyOnUnmount: false
})(connect(mapStateToProps, { chooseRole })(LandingRoleForm));
