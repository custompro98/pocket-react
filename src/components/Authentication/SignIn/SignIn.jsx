import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { signIn } from '../../../helpers/Api/Authentication';
import { submitDisabled } from './SignInHelper';

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
    signIn(this.state.email, this.state.password)
      .then(this.props.onSignIn)
      .then(this.navigateHome)
  };

  handleChange = (attr, e) => {
    this.setState({ [attr]: e.target.value });
  };

  navigateHome = () => {
    this.props.history.push('/')
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="text"
            label="Email"
            onChange={(e) => this.handleChange('email', e)}
          />
          <input
            name="password"
            type="password"
            label="Password"
            onChange={(e) => this.handleChange('password', e)}
          />
          <input type="submit" value="Sign in" disabled={submitDisabled(this.state)} />
        </form>

        <Link to="/">Cancel</Link>
      </div>
    );
  }
};

export default withRouter(SignIn);
