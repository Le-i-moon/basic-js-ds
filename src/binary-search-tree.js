const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  createNode(data = null, left = null, right = null) {
    return {
      data: data,
      left: left,
      right: right,
    };
  }

  root() {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    return this.tree;
  }

  add(data) {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    const rec = (node) => {
      if (data > node.data) {
        node.right ? rec(node.right) : (node.right = this.createNode(data));
      } else {
        node.left ? rec(node.left) : (node.left = this.createNode(data));
      }
    };

    this.tree ? rec(this.root()) : (this.tree = this.createNode(data));
  }

  has(data) {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    if (this.find(data)) return true;
    return false;
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
