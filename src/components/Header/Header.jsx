import React from 'react';
import { Link } from 'react-router-dom';
import { Flag } from 'flag';

import { removeCredentials } from '../../helpers/SessionHelper/SessionHelper';

const Header = () => (
  <div id="header">
    <Flag
      name="loggedIn"
      render={() =>
        <div>
          <Link to="/" onClick={() => removeCredentials().then(this.props.handleSignOut)}>
            Sign Out
          </Link>
        </div>
      }
      fallbackRender={() =>
        <div>
          <Link to="/sign_in">Sign In</Link>
          <Link to="/sign_up">Sign Up</Link>
        </div>
      }
    />
  </div>
);

export default Header;
