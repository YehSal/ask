// Question Field contains the logic to render a single label and text input
import React from 'react';
import TextField from 'material-ui/TextField';

// Pull out input from props.input which contains all the different callbacks
// {...input} === onBlur = input.onBlur onChange = input.onChange, etc.
// TODO: style the text area
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <TextField
        hintText="What is the difference between BFS and DFS?"
        floatingLabelText="Type Question Here"
        multiLine={false}
        rows={1}
        errorText={touched && error}
        fullWidth={true}
        {...input}
      />
    </div>
  );
};
