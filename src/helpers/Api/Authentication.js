import fetchHelper from '../../helpers/FetchHelper/FetchHelper';

export const signIn = (email, password) => (
  fetchHelper({
    url: '/auth/sign_in',
    method: 'POST',
    body: { email, password }
  })
);
