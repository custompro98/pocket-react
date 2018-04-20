import 'whatwg-fetch';

import { fetchCredentials, storeCredentials } from '../../helpers/SessionHelper/SessionHelper';

const fetchHelper = ({ url, method, body = undefined }) => {
  const apiBaseUrl = 'https://secret-lake-48253.herokuapp.com';
  // const apiBaseUrl = 'http://localhost:3000'

  const headers = { 'Content-Type': 'application/json', ...fetchCredentials() };
  const params = { method, headers, mode: 'cors', body };

  return fetch(apiBaseUrl + url, params)
    .then((res) => {
      storeCredentials(res.headers);
      return res.json();
    })
    .then((json) => {
      if (json.errors) throw new Error('Need to sign in')
      return json;
    });
};

export default fetchHelper;
