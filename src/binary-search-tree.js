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
    const entry = (node) => {
      if (data > node.data) {
        node.right ? entry(node.right) : (node.right = this.createNode(data));
      } else {
        node.left ? entry(node.left) : (node.left = this.createNode(data));
      }
    };

    this.tree ? entry(this.root()) : (this.tree = this.createNode(data));
  }

  has(data) {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    if (this.find(data)) return true;
    return false;
  }

  find(data) {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    const entry = (node) => {
      if (node.data == data) {
        return node;
      } else {
        if (data > node.data) {
          if (node.right) return entry(node.right);
        } else {
          if (node.left) return entry(node.left);
        }
      }
      return null;
    };
    return entry(this.root());
  }

  findPreNode(data) {
    /* throw new NotImplementedError('Not implemented');
       remove line with error and write your code here */
    const entry = (node) => {
      if (node.left?.data == data || node.right?.data == data) {
        return node;
      } else {
        if (data > node.data) {
          if (node.right) return entry(node.right);
        } else {
          if (node.left) return entry(node.left);
        }
      }
      return null;
    };
    return entry(this.root());
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
