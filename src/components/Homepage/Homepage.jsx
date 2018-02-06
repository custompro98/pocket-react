import React from 'react';
import { Flag } from 'flag';

import BookmarkList from '../BookmarkList/BookmarkList'

const Homepage = () => (
  <div>
    <Flag name="loggedIn"
      component={BookmarkList}
      fallbackRender={() =>
        <span>Welcome to the main homepage</span>
      }
    />
  </div>
);

export default Homepage;
