import React from 'react';
import { style } from '../styles/courses/course';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const Loader = () => {
  return (
    <div style={style.container}>
      <RefreshIndicator
        size={40}
        left={10}
        top={0}
        status="loading"
        style={style.refresh}
      />
    </div>
  );
};

export default Loader;
