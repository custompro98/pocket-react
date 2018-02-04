import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { signIn } from '../../../helpers/Api/Authentication';
import { getBookmarks } from '../../../helpers/Api/Bookmarks';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    signIn(this.state.email, this.state.password);
  };

  handleChange = (attr, e) => {
    this.setState({ [attr]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="email" type="text" onChange={(e) => this.handleChange('email', e)} />
          <input name="password" type="password" onChange={(e) => this.handleChange('password', e)} />
          <input type="submit" value="Sign in" />
        </form>

        <Link to="/">Cancel</Link>
      </div>
    );
  }
};

export default SignIn;
