import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../screens/Landing/Landing';
import Articles from '../screens/Articles/Articles';
import Contact from '../screens/Contact/Contact';

export default () => (
  <BrowserRouter>
    <div>
      <Route exact={true} path="/" component={Landing} />
      <Route path="/articles" component={Articles} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
)