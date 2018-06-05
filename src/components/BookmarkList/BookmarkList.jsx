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
      pageInput: 1,
      currentPage: 1
    };
  }

  handlePageChange = e => {
    const pageInput = parseInt(e.target.value, 10);
    if (pageInput > 0) this.setState({ pageInput });
  };

  handlePageLoad = () => {
    this.setState({ currentPage: this.state.pageInput });
  };

  render() {
    const { selectedTag } = this.props;

    return (
      <QueryRenderer
        environment={environment}
        variables={{
          selectedTag: selectedTag,
          page: this.state.currentPage,
          limit: 9
        }}
        query={graphql`
          query BookmarkListQuery($selectedTag: ID, $page: Int, $limit: Int) {
            bookmarks(tag: $selectedTag, page: $page, limit: $limit) {
              id,
              title,
              url,
              owner {
                id,
                first_name
              }
              tags {
                id,
                name
              }
            }
          }
        `}
        render={({ error, props }) => {
          if (error) return <div>{console.log(error)}Error!</div>;
          return (
            <div className="BookmarkList__Wrapper">
              <ul className="BookmarkList__List">
                {props ? props.bookmarks.map(bookmark => (
                  <li key={bookmark.id} className="BookmarkList__Item">
                    <BookmarkCard bookmark={bookmark} />
                  </li>
                )) : <LoadingState />}
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
