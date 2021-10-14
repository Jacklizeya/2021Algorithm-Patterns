class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const has_path = function(root, sum) {
  // TODO: Write your code here
  if (root.left === null && root.right === null) { if (root.value === sum) {return true} else {return false}}
  else if (root.left !== null && root.right === null) {return has_path(root.left, sum - root.value)}
  else if (root.left === null && root.right!== null) {return has_path(root.right, sum - root.value)}
  else {return (has_path(root.left, sum - root.value) || has_path(root.right, sum - root.value))}
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)


// A more concise solution:

function hasPath(root, sum) {
  if (root === null) {
    return false;
  }

  // if the current node is a leaf and its value is equal to the sum, we've found a path
  if (root.val === sum && root.left === null && root.right === null) {
    return true;
  }

  // recursively call to traverse the left and right sub-tree
  // return true if any of the two recursive call return true
  return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val);
}
