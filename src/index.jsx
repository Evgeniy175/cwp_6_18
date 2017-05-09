import React from 'react';
import { render } from 'react-dom';
import { Redirect, Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app/index.jsx';

import './index.scss';

render(
  renderRouter(),
  document.getElementById('root')
);

function renderRouter() {
  return (
    <Router history={ browserHistory }>
      <Route path="*" component={ App } />
    </Router>
  );
}
