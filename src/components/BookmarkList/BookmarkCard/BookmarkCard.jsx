import React from 'react';

import './BookmarkCard.css';

const BookmarkCard = ({bookmark}) => {
  const faviconUrl = `${bookmark.url}/favicon.ico`;

  return (
    <a href={bookmark.url}>
      <div className="BookmarkCard__Card FloatingCard">
        <div className="BookmarkCard__Header">
          <span className="BookmarkCard__Title">
            {bookmark.title}
          </span>
          <em className="BookmarkCard__Owner">
            Owner: {bookmark.owner.first_name}
          </em>
        </div>
        <div className="BookmarkCard__Body">
          <div className="BookmarkCard__FaviconWrapper">
            {faviconUrl ?
                <img className="BookmarkCard__Favicon" src={faviconUrl} alt="favicon" /> :
                <span className="BookmarkCard__NoFavicon">No favicon found</span>}
          </div>
          <div className="BookmarkCard__TagsList">
            <span className="BookmarkCard__TagsLabel">Tags:</span>
            <em>{ bookmark.tags.edges.map(tag => tag.node.name).join(', ') }</em>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BookmarkCard;
