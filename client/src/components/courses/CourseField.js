/*
 * CourseField contains the logic to render a single label and text input
 * Destructure the input which contains all the functions provided by reduxForm
 * {...input} === onBlur = input.onBlur onChange = input.onChange, etc.
 */
 
import React from 'react';
import TextField from 'material-ui/TextField';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <TextField
        hintText="e.g. CPSC 474"
        floatingLabelText={label}
        fullWidth={true}
        errorText={touched && error}
        {...input}
      />
    </div>
  );
};
