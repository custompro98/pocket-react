import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div id="header">
    <Link to="/sign_in">Sign In</Link>
    <Link to="/sign_up">Sign Up</Link>
  </div>
);

export default Header;
