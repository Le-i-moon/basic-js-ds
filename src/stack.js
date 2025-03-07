const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.myArray = [];
  }
  push(element) {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    this.myArray.push(element);
  }

  pop() {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    return this.myArray.pop();
  }

  peek() {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    return this.myArray.length > 0
      ? this.myArray[this.myArray.length - 1]
      : undefined;
  }
}

module.exports = {
  Stack,
};
