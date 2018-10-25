import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import registerServiceWorker from './registerServiceWorker';
import Router from './Routing/Router';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik');
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  body {
    font-family: 'Rubik', sans-serif;
    margin: 0px;
  }
`;

const Theme = {
  body: 'rgb(13, 23, 29)',
  header: '#1c2938',
  primary: '#1e74ff',
}

ReactDOM.render(
  (
    <ThemeProvider theme={Theme}>
      <div>
        <GlobalStyle />
        <Router />
      </div>
    </ThemeProvider>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
