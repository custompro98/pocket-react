import React, { Component } from 'react';
import { graphql } from 'react-relay';
import { withRouter } from 'react-router-dom';

import { createBookmark } from '../../helpers/GraphqlHelper/GraphqlHelper';

import { submitDisabled } from './CreateHelper';

import './Create.css';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {}
    };
  }

  handleChange = (attr, e) => {
    const newInput = { ...this.state.input, [attr]: e.target.value };
    this.setState({ input: newInput });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    createBookmark(createBookmarkMutation, this.navigateHome, this.state.input);
  };

  navigateHome = () => {
    this.props.history.push('/');
  };

  logError = (e) => {
    console.log(e);
  }

  render() {
    const { children } = this.props;
    const { input } = this.state;

    return (
      <div className="Create__Wrapper FloatingCard">
        <form className="Create__Form" onSubmit={this.handleSubmit}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onChange: (e) => this.handleChange(child.props.name, e)
            })
          )}
          <div className="Create__SubmitBtnWrapper">
            <input
              type="submit"
              value="Create"
              className="Create__SubmitBtn SubmitBtn"
              disabled={submitDisabled(children.length, input)}
            />
          </div>
        </form>
      </div>
    );
  }
};

const createBookmarkMutation = graphql`
  mutation CreateBookmarkMutation($input: createBookmarkInput!) {
    createBookmark(input: $input) {
      bookmark { id }
    }
  }
`;

export default withRouter(Create);
