import Cookies from 'universal-cookie';

export const storeCredentials = (headers) => {
  const credentials = {
    'access-token': headers.get('access-token'),
    'expiry': headers.get('expiry'),
    'client': headers.get('client'),
    'uid': headers.get('uid')
  }

  const cookies = new Cookies();
  cookies.set('credentials', credentials, { path: '/' });
};

export const fetchCredentials = () => {
  const cookies = new Cookies();
  const credentials =  cookies.get('credentials');

  return credentials && credentials.uid ? credentials : {};
};

export const loggedIn = () => (
  fetchCredentials() !== {}
);

export const removeCredentials = () => {
  const cookies = new Cookies();
  return cookies.remove('credentials');
};
