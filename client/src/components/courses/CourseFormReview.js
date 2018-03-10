import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

const CourseFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <RaisedButton
        label="Back"
        secondary={true}
        style={style}
        onClick={onCancel}
      />
    </div>
  );
};

export default CourseFormReview;
