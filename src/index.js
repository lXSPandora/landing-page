import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import { client } from './config/apolloClient';
import Home from './screens/Home/Home';
import Articles from './screens/Articles/Articles';
import registerServiceWorker from './worker/registerServiceWorker';
import './css/index.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
      </div>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
