import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { PersonManager } from '../function_component_example';

const DashboardComponnent: FunctionComponent = (props) => {
  return (
    <div>
      <PersonManager title="asdlkfjsdfa" />
    </div>
  );
};

export const Dashboard = withRouter(DashboardComponnent);
