import React from 'react';
import { Link } from 'react-router-dom';
import { Flag } from 'flag';

import { removeCredentials } from '../../helpers/SessionHelper/SessionHelper';

import './Header.css';

const Header = () => (
  <div id="header">
    <div className="Header__Logo">
      <Link to="/">Home</Link>
    </div>
    <div className="Header__CredentialControls">
      <Flag name="loggedIn"
        render={() =>
          <div>
            <Link
              to="/"
              onClick={() => removeCredentials().then(this.props.handleSignOut)}
              className="Header__AuthLink"
            >
              Sign Out
            </Link>
          </div>
        }
        fallbackRender={() =>
          <div>
            <Link to="/sign_in" className="Header__AuthLink">Sign In</Link>
            <Link to="/sign_up" className="Header__AuthLink">Sign Up</Link>
          </div>
        }
      />
    </div>
  </div>
);

export default Header;
