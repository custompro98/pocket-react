import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import { FlagsProvider } from 'flag';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import SignIn from './components/Authentication/SignIn/SignIn';
import SignUp from './components/Authentication/SignUp/SignUp';

import { loggedIn } from './helpers/SessionHelper/SessionHelper';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

class Router extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: loggedIn()
    };
  }

  handleSignIn = () => {
    this.setState({ loggedIn: true })
  };

  handleSignOut = () => {
    this.setState({ loggedIn: false })
  };

  render() {
    return (
      <FlagsProvider flags={{ loggedIn: this.state.loggedIn }}>
        <BrowserRouter>
          <div>
            <Header onSignOut={this.handleSignOut} />
            <div id="main">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact
                  path="/sign_in"
                  render={() => <SignIn onSignIn={this.handleSignIn} />}
                />
                <Route exact
                  path="/sign_up"
                  render={() => <SignUp onSignUp={this.handleSignIn} />}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </FlagsProvider>
    );
  };
};

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
