/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SearchPage from 'containers/SearchPage/Loadable';

const App = () => (
  <div>
    <Helmet titleTemplate="%s - News Fetcher" defaultTitle="News Fetcher">
      <meta
        name="description"
        content="News Fetcher - a non-commercial UI facade for News API"
      />
    </Helmet>
    <CssBaseline />
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
