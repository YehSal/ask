import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Done from 'material-ui/svg-icons/action/done';
import RoleField from './RoleField';
import { chooseRole } from '../../actions';

class RoleForm extends Component {
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
          component={RoleField}
        />
      </div>
    );
  }

  submitHandler() {
    console.log(this.props);
    this.props.chooseRole(this.props.formValues);
  }

  render() {
    return (
      <div>
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
  console.log(state);
  return { formValues: state.form.roleForm ? state.form.roleForm.values : false };
}

export default reduxForm({
  form: 'roleForm',
  destroyOnUnmount: false
})(connect(mapStateToProps, { chooseRole })(RoleForm));
