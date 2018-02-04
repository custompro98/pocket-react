import 'whatwg-fetch';

import { fetchCredentials, storeCredentials } from '../../helpers/SessionHelper/SessionHelper';

const fetchHelper = ({ url, method, body = undefined }) => {
  const apiBaseUrl = 'https://secret-lake-48253.herokuapp.com';
  // const apiBaseUrl = 'http://localhost:3001';

  const headers = { 'content-type': 'application/json', ...fetchCredentials() };
  const params = { method, headers, mode: 'cors' };

  if (body !== undefined) params.body = JSON.stringify(body);

  return fetch(apiBaseUrl + url, params).then((res) => {
    storeCredentials(res.headers);
    return res;
  });
};

export default fetchHelper;
