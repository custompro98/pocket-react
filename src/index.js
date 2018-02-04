import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

import registerServiceWorker from './registerServiceWorker';

const router = (
  <BrowserRouter>
    <div>
      <div id="header">
        <Link to="/sign_in">Sign In</Link>
        <Link to="/sign_up">Sign Up</Link>
      </div>

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
