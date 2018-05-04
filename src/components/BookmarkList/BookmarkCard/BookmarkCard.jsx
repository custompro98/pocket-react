import React from 'react';

import './BookmarkCard.css';

const BookmarkCard = ({bookmark}) => {
  const faviconUrl = `${bookmark.url}/favicon.ico`;

  return (
    <a href={bookmark.url}>
      <div className="BookmarkCard__card">
        <div className="BookmarkCard__header">
          <span className="BookmarkCard__title">
            {bookmark.title}
          </span>
          <em className="BookmarkCard__owner">
            Owner: {bookmark.owner.first_name}
          </em>
        </div>
        <div className="BookmarkCard__body">
          <div className="BookmarkCard__faviconWrapper">
            {faviconUrl ?
                <img className="BookmarkCard__favicon" src={faviconUrl} alt="favicon" /> :
                <span className="BookmarkCard__noFavicon">No favicon found</span>}
          </div>
          <div className="BookmarkCard__tagsList">
            <span className="BookmarkCard__tagsLabel">Tags:</span>
            <em>{ bookmark.tags.map(tag => tag.name).join(', ') }</em>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BookmarkCard;
