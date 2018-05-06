import React from 'react';
import { Redirect }  from 'react-router-dom';

import BookmarkList from '../BookmarkList/BookmarkList'

const Homepage = ({ loggedIn }) => (
  <React.Fragment>
    { loggedIn ?
      <BookmarkList /> :
      <Redirect to="/sign_in" />
    }
  </React.Fragment>
);

export default Homepage;
