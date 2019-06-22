import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { NotFound } from '_components';
import { NotFound } from './core/components';
import { Main } from './features/MainPage';
import { Articles } from './features/Results';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/country/:cnt" component={Articles} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default hot(App);
