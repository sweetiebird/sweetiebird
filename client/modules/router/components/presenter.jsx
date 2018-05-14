import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Paths } from '../constants';

import { ProductPage } from '../../product/components';

const Routes = () => (
  <Switch>
    <Route path={Paths.PRODUCT} component={ProductPage} />
  </Switch>
);

export default Routes;
