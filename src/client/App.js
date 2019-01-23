import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { NotFound } from 'components';
import history from './core/state-management/history';
import { Main } from './features/main-page';
import { Articles } from './features/results';

// eslint-disable-next-line react/prefer-stateless-function
export default () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/country/:cnt" component={Articles} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);
