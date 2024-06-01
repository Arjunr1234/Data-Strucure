class Node {
  constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  isEmpty() {
      return this.root === null;
  }

  insertValue(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
          this.root = node;
      } else {
          this.insertNode(this.root, node);
      }
  }


  insertNode(root, newNode){
      if (newNode.value < root.value) {
          if (root.left === null) {
              root.left = newNode;
          } else {
              return this.insertNode(root.left, newNode);
          }
      } else {
          if (root.right === null) {
              root.right = newNode;
          } else {
              return this.insertNode(root.right, newNode);
          }
      }
      return root;
  }

  search(root, value) {
      if (!root) {
          return false;
      } else {
          if (root.value === value) {
              return true;
          } else if (value < root.value) {
              return this.search(root.left, value);
          } else {
              return this.search(root.right, value);
          }
      }
  }

  preOrder(root){
      if(root){
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
      }
  }

  inOrder(root){
     if(root){
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right)
     }
  }

  postOrder(root){
    if(root){
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder(root){
    const queue = [];
    queue.push(root);
    while(queue.length){
      let curr = queue.shift();
      console.log(curr.value);
      if(curr.left){
        queue.push(curr.left)
      }
      if(curr.right){
        queue.push(curr.right)
      }
    }
  }

  min(root){
    if(!root.left){
      return root.value;
    }else{
      return this.min(root.left)
    }
  }
  
  max(root){
     if(!root.right){
        return root.value
     }else{
        return this.max(root.right)
     }
  }
  

  delete(value){
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value){
      if(root === null){
        return root;
      }
      if(value < root.value){
        root.left = this.deleteNode(root.left, value);
      }else if(value > root.value){
        root.right = this.deleteNode(root.right, value);
      }else{
        if(!root.left && !root.right){
          return null
        }
        if(!root.left){
          return root.right
        }else if(!root.right){
          return root.left;
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, root.value);
      }
        return root;       
     }

   findClosestValueInBST(root, target) {
    let closest = root.value;
    let currentNode = root;

    while (currentNode) {
        if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
            closest = currentNode.value;
        }                               
        if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            break; 
        }
    }                             

    return closest;
}

isBST(root, min = -Infinity, max = Infinity) {
  if (!root) {
      return true; // An empty tree is considered as a BST
  }

  // Check if the current node's value is within the valid range
  if (root.value <= min || root.value >= max) {
      return false;
  }

  // Recursively check the left and right subtrees
  return this.isBST(root.left, min, root.value) && this.isBST(root.right, root.value, max);
}

height(root) {
  function calculateHeight(node) {
    if (node === null) {
      return -1; 
    }
    const leftHeight = calculateHeight(node.left);
    const rightHeight = calculateHeight(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  return calculateHeight(root);
}

sumSubtree(node) {
  if (node === null) {
    return 0;
  }
  return (
    node.value + this.sumSubtree(node.left) + this.sumSubtree(node.right)
  );
}


}

const bst = new BinarySearchTree();
console.log("Is empty ?: ", bst.isEmpty());

bst.insertValue(10);
bst.insertValue(5);
bst.insertValue(15)
bst.insertValue(3);
bst.insertValue(7);
bst.insertValue(45);

console.log("thisis closeset: ",bst.findClosestValueInBST(bst.root, 23));
  
bst.levelOrder(bst.root)
console.log("This is the max: ", bst.max(bst.root));
console.log("This is the min: ", bst.min(bst.root));
console.log("This is sum: ", bst.sumSubtree(bst.root));


console.log(bst.search(bst.root, 12));
console.log("isBst: ", bst.isBST(bst.root));
console.log("This is the height of the tree: ",bst.height(bst.root));
