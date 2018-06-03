/**
 * @flow
 * @relayHash 5acac44bce5b7f84a8540a3f140b9103
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateBookmarkMutationVariables = {|
  input: {
    archived?: ?boolean,
    clientMutationId?: ?string,
    favorite?: ?boolean,
    title?: ?string,
    url?: ?string,
  },
|};
export type CreateBookmarkMutationResponse = {|
  +createBookmark: ?{|
    +bookmark: ?{|
      +id: string,
    |},
  |},
|};
*/


/*
mutation CreateBookmarkMutation(
  $input: createBookmarkInput!
) {
  createBookmark(input: $input) {
    bookmark {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createBookmarkInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createBookmark",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "createBookmarkInput!"
      }
    ],
    "concreteType": "createBookmarkPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookmark",
        "storageKey": null,
        "args": null,
        "concreteType": "Bookmark",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
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
  "operationKind": "mutation",
  "name": "CreateBookmarkMutation",
  "id": null,
  "text": "mutation CreateBookmarkMutation(\n  $input: createBookmarkInput!\n) {\n  createBookmark(input: $input) {\n    bookmark {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateBookmarkMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateBookmarkMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '6971332959f210ae62efe5546ea0fc2e';
module.exports = node;
