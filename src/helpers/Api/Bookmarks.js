import FetchHelper from '../../helpers/FetchHelper/FetchHelper';

export const getBookmarks = () => (
  FetchHelper({
    url: '/api/v1/bookmarks',
    method: 'GET'
  })
);
