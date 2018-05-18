import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../../Environment';

import BookmarkCard from './BookmarkCard/BookmarkCard';

import './BookmarkList.css';

const BookmarkList = () => {
  return (
    <QueryRenderer
      environment={environment}
      variables={{}}
      query={graphql`
        query BookmarkListQuery {
          bookmarks {
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
        if (!props) return <div>Loading...</div>;
        return (
          <div className="BookmarkList__Wrapper">
            <ul className="BookmarkList__List">
              {props.bookmarks.map((bookmark) => (
                <li key={bookmark.id} className="BookmarkList__Item">
                  <BookmarkCard bookmark={bookmark} />
                </li>
              ))}
            </ul>
          </div>
        );
      }}
    />
  );
};

export default BookmarkList;
