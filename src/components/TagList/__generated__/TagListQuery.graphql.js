/**
 * @flow
 * @relayHash c9944f9f51b4cbb40ce6fc1d77f1537b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TagListQueryVariables = {| |};
export type TagListQueryResponse = {|
  +tags: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
  |}>,
|};
*/


/*
query TagListQuery {
  tags {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "tags",
    "storageKey": null,
    "args": null,
    "concreteType": "Tag",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TagListQuery",
  "id": null,
  "text": "query TagListQuery {\n  tags {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TagListQuery",
    "type": "Root",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "TagListQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
(node/*: any*/).hash = 'fa3a4dc00b49f494d32812447db18fab';
module.exports = node;
