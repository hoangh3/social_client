import React from 'react'
import { Route, IndexRoute } from 'react-router'
import HomePageLayout from '../components/Layout/HomePageLayout.jsx';

const routes = (
  <Route path="/" component={HomePageLayout}>
  </Route>
);

export default routes;
