import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NotFound } from 'components';
import { Main } from './features/main-page';
import { Articles } from './features/results';

// eslint-disable-next-line react/prefer-stateless-function
export default () => (
  <Router>
    <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/country/:cnt" component={Articles} />
        <Route component={NotFound} />
    </Switch>
  </Router>
);
