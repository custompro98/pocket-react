import { commitMutation } from 'react-relay';
import environment from '../../Environment';

export const createBookmark = (mutation, onCompleted, onError, { title, url }) => {
  const variables = {
    input: {
      title,
      url
    }
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted,
      onError
    }
  );
};
