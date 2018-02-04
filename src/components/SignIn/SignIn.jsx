import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => (
  <div>
    <input name="username" type="text" />
    <input name="password" type="password" />

    <Link to="/">Cancel</Link>
  </div>
);

export default SignIn;
