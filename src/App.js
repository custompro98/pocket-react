import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import { loggedIn, removeCredentials } from './helpers/SessionHelper/SessionHelper';

import SignIn from './components/Authentication/SignIn/SignIn';
import SignUp from './components/Authentication/SignUp/SignUp';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

import Create from './components/Create/Create';
import TextInput from './components/FormElements/TextInput/TextInput';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: loggedIn()
    };
  }

  handleSignIn = () => {
    this.setState({ loggedIn: true });
  };

  handleSignOut = (history) => {
    this.setState({ loggedIn: false }, () => {
      removeCredentials();
      history.push('/sign_in');
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header loggedIn={this.state.loggedIn} onSignOut={this.handleSignOut} />
          <div id="main">
            <Switch>
              <Route
                path="/sign_in"
                render={() => <SignIn onSignIn={this.handleSignIn} />}
              />
              <Route
                path="/sign_up"
                render={() => <SignUp />}
              />
              <Route
                path="/sign_out"
                render={() => <SignUp />}
              />
              <Route
                path="/bookmarks/new"
              >
                <Create target="bookmark">
                  <TextInput
                    name="title"
                    type="text"
                    label="Title"
                  />
                  <TextInput
                    name="url"
                    type="text"
                    label="URL"
                  />
                </Create>
              </Route>
              <Route
                path="/"
                render={() => <Homepage loggedIn={this.state.loggedIn} /> }
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;
