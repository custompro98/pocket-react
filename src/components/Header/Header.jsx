import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.css';

const Header = ({ history, loggedIn, onSignOut }) => {
  const signOutFragment = () => (
    <div className="Header__AuthLink">
      <span onClick={() => onSignOut(history)}>
        Sign Out
      </span>
    </div>
  );

  const authorizationFragment = () => (
    <React.Fragment>
      <Link to="/sign_in" className="Header__AuthLink">Sign In</Link>
      <Link to="/sign_up" className="Header__AuthLink">Sign Up</Link>
    </React.Fragment>
  );

  return (
    <div id="header">
      <div className="Header__Logo">
        <Link to="/">Home</Link>
      </div>
      <div className="Header__CredentialControls">
          { loggedIn ? signOutFragment() : authorizationFragment() }
      </div>
    </div>
  );
};

export default withRouter(Header);
