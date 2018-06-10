import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { Link } from 'react-router-dom';

import environment from '../../Environment';

import LoadingState from '../LoadingState/LoadingState';
import BookmarkCard from './BookmarkCard/BookmarkCard';
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';
import TextInput from '../FormElements/TextInput/TextInput';

import './BookmarkList.css';

class BookmarkList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageInput: undefined,
      currentPage: undefined
    };
  }

  handlePageChange = e => {
    const pageInput = parseInt(e.target.value, 10);
    if (pageInput > 0) this.setState({ pageInput });
  };

  handlePageLoad = () => {
    this.setState({ currentPage: this.state.pageInput });
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
          after: this.state.currentPage,
          first: 9
        }}
        query={graphql`
          query BookmarkListQuery($selectedTag: ID, $after: String, $first: Int) {
            me {
              bookmarks(tag: $selectedTag, after: $after, first: $first) {
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
                  </React.Fragment> : <LoadingState />}
              </ul>
              <div className="BookmarkList__AddBookmark">
                <Link to="/bookmarks/new">
                  <FloatingActionButton>
                    <span>+</span>
                  </FloatingActionButton>
                </Link>
              </div>
              <div>
                <TextInput
                  name="page"
                  type="text"
                  label="Go to page:"
                  onChange={this.handlePageChange}
                  style={{ width: '30px' }}
                />
                <input type="submit" onClick={this.handlePageLoad} />
              </div>
            </div>
          );
        }}
      />
    );
  }
};

export default BookmarkList;
