import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { routes } from './routes';
import Home from '../components/home';
import NotFound from '../components/not-found';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Redirect path="/" to="/featured" exact={true} />
        <Route exact path={routes.HOME(':id')} component={Home} />
        <Redirect path="*" to="/404" exact={true} />
      </Switch>
    </Router>
  );
};
export default AppRouter;
