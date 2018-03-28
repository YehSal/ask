// Question Field contains the logic to render a single label and text input
import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

// Pull out input from props.input which contains all the different callbacks
// {...input} === onBlur = input.onBlur onChange = input.onChange, etc.
// TODO: style the text area
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <RadioButtonGroup
        name="role"
        {...input}
      >
        <RadioButton
          value="2"
          label="Student"
        />
        <RadioButton
          value="1"
          label="Professor"
        />
      </RadioButtonGroup>
    </div>
  );
};
