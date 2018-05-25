import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../../Environment';

import LoadingState from '../LoadingState/LoadingState';
import BookmarkCard from './BookmarkCard/BookmarkCard';

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
          </div>
        );
      }}
    />
  );
};

export default BookmarkList;
