'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  pop() {
    // Removal of last Node
    // Big O = O(n) n = number of Nodes
    if (!this.head) return null;
    let currentNode = this.head;

    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    return this;
  }

  remove(value) {
    // removal of a Node based on a certain value
    // Big O = O(n) n = number of Nodes
    if (!this.head) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
    }

    let previousNode = this.head;
    let currentNode = this.head.next;

    while (currentNode) {
      if (currentNode.value === value) {
        previousNode.next = currentNode.next;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return this;
  }

  map(callback) {
    // Map method
    // Big O = O(n) n = number of Nodes
    if (!this.head) return null;
    let currentNode = this.head;
    
    while (currentNode) {
      currentNode.value = callback(currentNode.value);
      currentNode = currentNode.next;
    }

    return this;
  }
  insertAtHead(value) {
    // InsertAtHead
    // Big O = O(1)
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }
  insertAtEnd(value) {
    // InsertAtEnd
    // Big O = O(1)
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }
};
