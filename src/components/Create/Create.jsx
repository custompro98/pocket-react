import React, { Component } from 'react';

import TextInput from '../FormElements/TextInput/TextInput';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      url: ''
    };
  }

  handleChange = (attr, e) => {
    this.setState({ [attr]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <TextInput
          name="name"
          type="text"
          label="Name"
          onChange={(e) => this.handleChange('name', e)}
        >
        </TextInput>
        <TextInput
          name="url"
          type="text"
          label="URL"
          onChange={(e) => this.handleChange('url', e)}
        >
        </TextInput>
      </React.Fragment>
    );
  }
};

export default Create;
