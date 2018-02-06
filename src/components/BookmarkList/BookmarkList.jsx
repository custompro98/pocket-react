import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { getBookmarks } from '../../helpers/Api/Bookmarks';

import './BookmarkList.css';

class BookmarkList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: []
    };
  }

  componentDidMount = () => {
    getBookmarks()
      .then((res) => {
        this.setState({ bookmarks: res });
      })
      .catch(this.navigateToSignIn);
  };

  navigateToSignIn = () => {
    this.props.history.push('/sign_in');
  };

  render() {
    return (
      <div>
        <ul className="BookmarkList__List">
          {this.state.bookmarks.map((bookmark) => (
            <li className="BookmarkList__ListItem" key={bookmark.title}>
              <span className="BookmarkList__BookmarkTitle">
                <a href={bookmark.url}>
                  {bookmark.title}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default withRouter(BookmarkList);
