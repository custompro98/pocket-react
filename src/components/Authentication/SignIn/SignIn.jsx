import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import TextInput from '../../../components/FormElements/TextInput/TextInput';

import { signIn } from '../../../helpers/Api/Authentication';
import { submitDisabled } from './SignInHelper';

import './SignIn.css';

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
      <div className="SignIn__Wrapper FloatingCard">
        <form className="SignIn__Form" onSubmit={this.handleSubmit}>
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
          <div className="SignIn__SubmitBtnWrapper">
            <input
              type="submit"
              value="Sign in"
              className="SignIn__SubmitBtn SubmitBtn"
              disabled={submitDisabled(this.state)}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default withRouter(SignIn);
