import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import UserDetails from '../pages/UserDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:username" component={UserDetails} />
  </Switch>
);

export default Routes;
