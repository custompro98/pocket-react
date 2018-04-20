/**
 * @flow
 * @relayHash d071b77cd63a10206eec6384be2917af
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BookmarkListQueryVariables = {| |};
export type BookmarkListQueryResponse = {|
  +bookmarks: ?$ReadOnlyArray<?{|
    +title: ?string,
    +url: ?string,
    +owner: ?{|
      +first_name: ?string,
    |},
  |}>,
|};
*/


/*
query BookmarkListQuery {
  bookmarks {
    title
    url
    owner {
      first_name
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "first_name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookmarkListQuery",
  "id": null,
  "text": "query BookmarkListQuery {\n  bookmarks {\n    title\n    url\n    owner {\n      first_name\n      id\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookmarkListQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookmarks",
        "storageKey": null,
        "args": null,
        "concreteType": "Bookmark",
        "plural": true,
        "selections": [
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "owner",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookmarkListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookmarks",
        "storageKey": null,
        "args": null,
        "concreteType": "Bookmark",
        "plural": true,
        "selections": [
          v0,
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "owner",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2,
              v3
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '26f475816508f4c7223634ab7e11df2d';
module.exports = node;
