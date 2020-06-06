import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Authentication from '../authentication/authentication';
import { LoginComponent } from '../authentication/login';
import Navigation from '../navigation/navigation';
import { DashboardRoute } from '../main/main';

export class Routes extends React.Component {
  render(): React.ReactNode {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/authentication" component={Authentication} />
          <Route path="/login" component={LoginComponent} />
          <DashboardRoute
            path="/dashboard"
            title="dashboard"
            component={Navigation}
          />
          <Route path="*">
            <Redirect to="/dashboard" />
          </Route>
          {/* <Main path="/dashboard" component={Dashboard} checkAuthentication={true} /> */}
          {/* <Main path="*" component={NotFound} checkAuthentication={false} /> */}
        </Switch>
      </Router>
    );
  }
}
