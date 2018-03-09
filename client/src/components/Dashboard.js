import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

const Dashboard = () => {
  return (
    <div>
      Dashboard

      <FloatingActionButton style={style} href='/courses/new'>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  );
};

export default Dashboard;
