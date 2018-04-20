import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

import FetchHelper from './helpers/FetchHelper/FetchHelper';

const fetchQuery = (operation, variables) => (
  FetchHelper({
    url: '/api/v1/graphql',
    method: 'POST',
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  })
);

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;
