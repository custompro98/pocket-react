/**
 * @flow
 * @relayHash b50897949a2fd7b2763c7e49f60b8733
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BookmarkListQueryVariables = {|
  selectedTag?: ?string,
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
) {
  bookmarks(tag: $selectedTag) {
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
  "text": "query BookmarkListQuery(\n  $selectedTag: ID\n) {\n  bookmarks(tag: $selectedTag) {\n    id\n    title\n    url\n    owner {\n      id\n      first_name\n    }\n    tags {\n      id\n      name\n    }\n  }\n}\n",
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
(node/*: any*/).hash = 'fc05b0719ab13e894f3f6d2186363efa';
module.exports = node;
