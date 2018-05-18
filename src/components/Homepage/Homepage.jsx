import React, { Component } from 'react';
import { Redirect }  from 'react-router-dom';

import BookmarkList from '../BookmarkList/BookmarkList';
import TagList from '../TagList/TagList';

import './Homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTag: undefined
    };
  }

  handleSelectTag = (tag) => {
    this.setState({ selectedTag: tag.id });
  };

  render() {
    const { loggedIn } = this.props;

    return (
      <React.Fragment>
        { loggedIn ?
            <div className="Homepage__Wrapper">
              <TagList handleSelectTag={this.handleSelectTag} selectedTag={this.state.selectedTag} />
              <BookmarkList selectedTag={this.state.selectedTag} />
            </div> :
          <Redirect to="/sign_in" />
        }
      </React.Fragment>
    );
  }
};

export default Homepage;
