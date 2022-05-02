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
    this.myArray = [];
  }

  getUnderlyingList() {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    const rec = (i) => {
      const value = this.myArray[i];
      const next = this.myArray[i + 1];
      if (next) {
        return {
          value: value,
          next: rec(i + 1),
        };
      } else {
        return {
          value: value,
          next: null,
        };
      }
    };
    return rec(0);
  }

  enqueue(value) {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    this.myArray.push(value);
  }

  dequeue() {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    return this.myArray.splice(0, 1)[0];
  }
}

module.exports = {
  Queue,
};
