import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import { Link } from 'react-router-dom';

import environment from '../../Environment';

import LoadingState from '../LoadingState/LoadingState';
import BookmarkCard from './BookmarkCard/BookmarkCard';
import FloatingActionButton from '../FloatingActionButton/FloatingActionButton';

import './BookmarkList.css';

const BookmarkList = ({ selectedTag }) => {
  return (
    <QueryRenderer
      environment={environment}
      variables={{
        selectedTag: selectedTag
      }}
      query={graphql`
        query BookmarkListQuery($selectedTag: ID) {
          bookmarks(tag: $selectedTag) {
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
          </div>
        );
      }}
    />
  );
};

export default BookmarkList;
