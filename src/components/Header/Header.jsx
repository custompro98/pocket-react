import React from 'react';
import { Link } from 'react-router-dom';

import { loggedIn, removeCredentials } from '../../helpers/SessionHelper/SessionHelper';

const Header = () => (
  <div id="header">
    { (!loggedIn() &&
      <div>
        <Link to="/sign_in">Sign In</Link>
        <Link to="/sign_up">Sign Up</Link>
      </div>) ||
      <div>
        <Link to="/" onClick={removeCredentials}>
          Sign Out
        </Link>
      </div>
    }
  </div>
);

export default Header;
