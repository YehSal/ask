// CourseField contains the logic to render a single label and text input
import React from 'react';

// Pull out input from props.input which contains all the different callbacks
// {...input} === onBlur = input.onBlur onChange = input.onChange, etc.
export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
