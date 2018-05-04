/**
 * @flow
 * @relayHash e0124a2cdd01dabaf287b4f4aef1b910
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BookmarkListQueryVariables = {| |};
export type BookmarkListQueryResponse = {|
  +bookmarks: ?$ReadOnlyArray<?{|
    +id: ?string,
    +title: ?string,
    +url: ?string,
    +owner: ?{|
      +id: ?string,
      +first_name: ?string,
    |},
    +tags: ?$ReadOnlyArray<?{|
      +id: ?string,
      +name: ?string,
    |}>,
  |}>,
|};
*/


/*
query BookmarkListQuery {
  bookmarks {
    id
    title
    url
    owner {
      id
      first_name
    }
    tags {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
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
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "url",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "owner",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "first_name",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tags",
        "storageKey": null,
        "args": null,
        "concreteType": "Tag",
        "plural": true,
        "selections": [
          v0,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookmarkListQuery",
  "id": null,
  "text": "query BookmarkListQuery {\n  bookmarks {\n    id\n    title\n    url\n    owner {\n      id\n      first_name\n    }\n    tags {\n      id\n      name\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookmarkListQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "BookmarkListQuery",
    "argumentDefinitions": [],
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '0291c1f14c5641378c2f11f66da4c2ac';
module.exports = node;
