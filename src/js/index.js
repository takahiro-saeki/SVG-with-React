import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import App from './containers/App/';

const ren = elem => {
  render(
  <AppContainer>
    <Router>
      <Route exact path="/" component={App}/>
    </Router>
  </AppContainer>, document.getElementById(elem),);
};

ren('app');

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./containers/App', () => {
      const NextRootContainer = require('./containers/App').default;
      render(<NextRootContainer />, document.getElementById('app'));
    })
  }
}
