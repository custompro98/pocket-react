import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { signUp } from '../../../helpers/Api/Authentication';
import { submitDisabled } from './SignUpHelper';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    signUp(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password
    ).then(this.props.onSignUp)
     .then(this.navigateHome);
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
            name="firstName"
            type="text"
            label="First Name"
            onChange={(e) => this.handleChange('firstName', e)}
          />
          <input
            name="lastName"
            type="text"
            label="Last Name"
            onChange={(e) => this.handleChange('lastName', e)}
          />
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
          <input
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            onChange={(e) => this.handleChange('confirmPassword', e)}
          />
          <input type="submit" value="Sign up" disabled={submitDisabled(this.state)} />
        </form>

        <Link to="/">Cancel</Link>
      </div>
    );
  }
};

export default withRouter(SignUp);
