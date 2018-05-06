import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import TextInput from '../../../components/FormElements/TextInput/TextInput';

import { signUp } from '../../../helpers/Api/Authentication';
import { submitDisabled } from './SignUpHelper';

import './SignUp.css';

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
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="SignUp__Wrapper FloatingCard">
        <form className="SignUp__Form" onSubmit={this.handleSubmit}>
          <TextInput
            name="firstName"
            type="text"
            label="First Name"
            onChange={(e) => this.handleChange('firstName', e)}
          />
          <TextInput
            name="lastName"
            type="text"
            label="Last Name"
            onChange={(e) => this.handleChange('lastName', e)}
          />
          <TextInput
            name="email"
            type="text"
            label="Email"
            onChange={(e) => this.handleChange('email', e)}
          />
          <TextInput
            name="password"
            type="password"
            label="Password"
            onChange={(e) => this.handleChange('password', e)}
          />
          <TextInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            onChange={(e) => this.handleChange('confirmPassword', e)}
          />
          <div className="SignUp__SubmitBtnWrapper">
            <input
              type="submit"
              value="Sign up"
              className="SignUp__SubmitBtn SubmitBtn"
              disabled={submitDisabled(this.state)}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default withRouter(SignUp);
