/**
 * @flow
 * @relayHash 8c53ccc72b3f052cc2623534f9aa546b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BookmarkListQueryVariables = {|
  selectedTag?: ?string,
  page?: ?number,
  limit?: ?number,
|};
export type BookmarkListQueryResponse = {|
  +bookmarks: ?$ReadOnlyArray<?{|
    +id: string,
    +title: string,
    +url: string,
    +owner: ?{|
      +id: string,
      +first_name: string,
    |},
    +tags: ?$ReadOnlyArray<?{|
      +id: string,
      +name: string,
    |}>,
  |}>,
|};
*/


/*
query BookmarkListQuery(
  $selectedTag: ID
  $page: Int
  $limit: Int
) {
  bookmarks(tag: $selectedTag, page: $page, limit: $limit) {
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
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "selectedTag",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "page",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "limit",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "bookmarks",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "limit",
        "variableName": "limit",
        "type": "Int"
      },
      {
        "kind": "Variable",
        "name": "page",
        "variableName": "page",
        "type": "Int"
      },
      {
        "kind": "Variable",
        "name": "tag",
        "variableName": "selectedTag",
        "type": "ID"
      }
    ],
    "concreteType": "Bookmark",
    "plural": true,
    "selections": [
      v1,
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
          v1,
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
          v1,
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
  "text": "query BookmarkListQuery(\n  $selectedTag: ID\n  $page: Int\n  $limit: Int\n) {\n  bookmarks(tag: $selectedTag, page: $page, limit: $limit) {\n    id\n    title\n    url\n    owner {\n      id\n      first_name\n    }\n    tags {\n      id\n      name\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookmarkListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "BookmarkListQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node/*: any*/).hash = '1d40b1c5ff1c24c3b0ee35e1818f8697';
module.exports = node;
