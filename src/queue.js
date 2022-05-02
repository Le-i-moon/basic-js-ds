const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.myhead = null;
    this.mytail = null;
  }

  getUnderlyingList() {
    /* throw new NotImplementedError('Not implemented');
     remove line with error and write your code here */
    return this.myhead;
  }

  enqueue(value) {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    let myList = new ListNode(value);
    if (!this.myhead) {
      this.myhead = myList;
      this.mytail = myList;
    } else {
      this.mytail.next = myList;
      this.mytail = myList;
    }
  }

  dequeue() {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    if (this.myhead) {
      let myHeadValueToRemove = this.myhead.value;
      this.myhead = this.myhead.next;
      return myHeadValueToRemove;
    } else {
      return this.myhead;
    }
  }
}

module.exports = {
  Queue,
};
