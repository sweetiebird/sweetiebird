import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Paths } from '../constants';

import { Header } from '../../components';
import { ProductPage } from '../../product/components';

const Routes = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route path={Paths.PRODUCT} component={ProductPage} />
    </Switch>
  </React.Fragment>
);

export default Routes;
