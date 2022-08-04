import Node from "./node.js";

export class BST {
  constructor(data) {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      node.left === null ? node.left = newNode : this.insertNode(node.left, newNode);
    } else {
      node.right === null ? node.right = newNode : this.insertNode(node.right, newNode);
    }
  }

  //getting the root
  getRootNode(){
    return this.root
  }
  
  //Show nodes in order
  inOrder(node, fn){
    if(node !== null){
        this.inOrder(node.left, fn) //values from the left side
        fn.call(null, node)// left and right nodes
        this.inOrder(node.right, fn) //values from the right side
    }
  }
}
