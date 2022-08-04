import { BST } from "./common/bst.js";

const binarySearchTree = new BST()

//insert some nodes
binarySearchTree.insert(11)
binarySearchTree.insert(23)
binarySearchTree.insert(2)
binarySearchTree.insert(7)
binarySearchTree.insert(22)
binarySearchTree.insert(16)
binarySearchTree.insert(13)
binarySearchTree.insert(4)
binarySearchTree.insert(9)
binarySearchTree.insert(27)

//getting the root node
const root = binarySearchTree.getRootNode()

//setting array for the values of the tree
const tree = new Array()

//putting the tree in order
binarySearchTree.inOrder(root, (node)=> tree.push(node.data))

//output
console.log(tree)