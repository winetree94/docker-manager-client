import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Authentication from '../authentication/authentication';
import Login from '../authentication/login';
import Navigation from '../navigation/navigation';
import { Main } from '../main/main';

export class Routes extends React.Component {
  render(): React.ReactNode {
    return (
      <Router>
        <Switch>
          <Route path="/authentication">
            <Authentication></Authentication>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Main path="/dashboard" component={Navigation} />
          {/* <Main path="/dashboard" component={Dashboard} checkAuthentication={true} /> */}
          {/* <Main path="*" component={NotFound} checkAuthentication={false} /> */}
        </Switch>
      </Router>
    );
  }
}
