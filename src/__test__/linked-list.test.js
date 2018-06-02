'use strict';

const LinkedList = require('../lib/linked-list');

describe('linked-list.js testing', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('insertAtHead - should insert node at the head', () => {
    const testList = new LinkedList();
    testList.insertAtHead(99);
    expect(testList.head.value).toEqual(99);
  });

  // I know all of this .next stuff is not good practice,
  // but it was the way I had already written the tests from a when I first started.
  test('should remove the Node with the entered value', () => {
    const testList = new LinkedList();

    testList.remove(5);
    expect(testList.head).toBeNull();

    testList.insertAtEnd(3);
    testList.insertAtEnd(4);
    testList.insertAtEnd(6);
    testList.insertAtEnd(8);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(6);
    expect(testList.head.next.next.next.value).toEqual(8); 
  });

  test('should invoke the callback on each Node', () => {
    const testList = new LinkedList();
    const cubed = n => n * n * n;

    testList.map(cubed);
    expect(testList.head).toBeNull();

    testList.insertAtHead(3);
    testList.insertAtEnd(4);
    testList.insertAtEnd(5);
    testList.insertAtEnd(10);
    expect(testList.head.value).toEqual(3);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(testList.head.next.next.next.value).toEqual(10);

    testList.map(cubed);
    expect(testList.head.value).toEqual(27);
    expect(testList.head.next.value).toEqual(64);
    expect(testList.head.next.next.value).toEqual(125);
    expect(testList.head.next.next.next.value).toEqual(1000);
  });
});
