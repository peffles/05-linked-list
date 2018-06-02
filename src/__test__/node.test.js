'use strict';

const Node = require('../lib/node');

describe('node.js test', () => {
  test('#constructor', () => {
    const myNode = new Node(3);
    expect(myNode.value).toEqual(3);
    expect(myNode.next).toBeNull();
  });
});
