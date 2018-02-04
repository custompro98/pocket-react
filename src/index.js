import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import SignIn from './components/Authentication/SignIn/SignIn';
import SignUp from './components/Authentication/SignUp/SignUp';

import registerServiceWorker from './registerServiceWorker';

const router = (
  <BrowserRouter>
    <div>
      <Header />

      <div id="main">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/sign_in" component={SignIn} />
          <Route exact path="/sign_up" component={SignUp} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
