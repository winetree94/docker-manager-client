import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navigation from '../navigation/navigation';
import { Main } from '../main/main';

export class Routes extends React.Component {
  render(): React.ReactNode {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Main path="/home" component={Navigation} />
          {/* <Main path="/dashboard" component={Dashboard} checkAuthentication={true} /> */}
          {/* <Main path="*" component={NotFound} checkAuthentication={false} /> */}
        </Switch>
      </Router>
    );
  }
}
