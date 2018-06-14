import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

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
