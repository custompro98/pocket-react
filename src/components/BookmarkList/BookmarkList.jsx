import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { Link } from 'react-router-dom';

import environment from '../../Environment';

import LoadingState from '../LoadingState/LoadingState';
import BookmarkCard from './BookmarkCard/BookmarkCard';
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';

import './BookmarkList.css';

class BookmarkList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forwardCount: 0,
      endCursor: undefined,
      startCursor: undefined
    };
  }

  handlePageBack = (startCursor) => {
    const forwardCount = this.state.forwardCount === 0 ? 0 : this.state.forwardCount - 1;
    this.setState({ forwardCount, endCursor: undefined, startCursor });
  };

  handlePageForward = (endCursor) => {
    const forwardCount = this.state.forwardCount + 1;
    this.setState({ forwardCount, endCursor, startCursor: undefined });
  };

  renderBookmarks = (bookmarks) => (
    bookmarks.map(bookmarkNode => {
      const bookmark = bookmarkNode.node;

      return (
        <li key={bookmark.id} className="BookmarkList__Item">
          <BookmarkCard bookmark={bookmark} />
        </li>
      );
    })
  );

  render() {
    const { selectedTag } = this.props;

    return (
      <QueryRenderer
        environment={environment}
        variables={{
          selectedTag: selectedTag,
          first: 9,
          after: this.state.endCursor,
          before: this.state.startCursor
        }}
        query={graphql`
          query BookmarkListQuery($selectedTag: ID, $first: Int, $after: String, $before: String) {
            me {
              bookmarks(tag: $selectedTag, first: $first, after: $after, before: $before) {
                pageInfo {
                  startCursor,
                  endCursor,
                  hasNextPage
                }
                edges {
                  node {
                    id,
                    title,
                    url,
                    owner {
                      id,
                      first_name
                    }
                    tags {
                      edges {
                        node {
                          id,
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ error, props }) => {
          if (error) return <div>{console.log(error)}Error!</div>;
          return (
            <div className="BookmarkList__Wrapper">
              <ul className="BookmarkList__List">
                {props ?
                  <React.Fragment>
                    {this.renderBookmarks(props.me.bookmarks.edges)}
                    <button
                      className="BookmarkList__Pagination"
                      onClick={() => this.handlePageBack(props.me.bookmarks.pageInfo.startCursor)}
                      disabled={this.state.forwardCount === 0}
                    >
                      Previous
                    </button>
                    <button
                      className="BookmarkList__Pagination"
                      onClick={() => this.handlePageForward(props.me.bookmarks.pageInfo.endCursor)}
                      disabled={!props.me.bookmarks.pageInfo.hasNextPage}
                    >
                      Next
                    </button>
                  </React.Fragment> : <LoadingState />}
              </ul>
              <div className="BookmarkList__AddBookmark">
                <Link to="/bookmarks/new">
                  <FloatingActionButton>
                    <span>+</span>
                  </FloatingActionButton>
                </Link>
              </div>
            </div>
          );
        }}
      />
    );
  }
};

export default BookmarkList;
