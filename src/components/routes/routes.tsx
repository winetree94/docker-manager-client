import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Authentication from '../../pages/authentication/signup';
import { LoginComponent } from '../../pages/authentication/login';
import Navigation from '../navigation/navigation';
import { DashboardRoute } from '../main/main';

export const PATH = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ETC: '/*',
};

export class Routes extends React.Component {
  render(): React.ReactNode {
    return (
      <Router>
        <Switch>
          <Route exact path={PATH.ROOT}>
            <Redirect to={PATH.DASHBOARD} />
          </Route>
          <Route path={PATH.SIGNUP} component={Authentication} />
          <Route path={PATH.LOGIN} component={LoginComponent} />
          <DashboardRoute path={PATH.DASHBOARD} title="dashboard" component={Navigation} />
          <Route path={PATH.ETC}>
            <Redirect to={PATH.DASHBOARD} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
