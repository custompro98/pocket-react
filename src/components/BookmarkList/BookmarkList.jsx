import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../../Environment';

import './BookmarkList.css';

class BookmarkList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: []
    };
  }

  navigateToSignIn = () => {
    this.props.history.push('/sign_in');
  };

  render() {
    return (
      <QueryRenderer
        environment={environment}
        variables={{}}
        query={graphql`
          query BookmarkListQuery {
            bookmarks {
              title,
              url,
              owner {
                first_name
              }
            }
          }
        `}
        render={({ error, props }) => {
          if (error) return <div>{console.log(error)}Error!</div>
          if (!props) return <div>Loading...</div>
          return (
            <div>
              <ul className="BookmarkList__List">
                {props.bookmarks.map((bookmark) => (
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
        }}
      />
    );
  }
};

export default withRouter(BookmarkList);
