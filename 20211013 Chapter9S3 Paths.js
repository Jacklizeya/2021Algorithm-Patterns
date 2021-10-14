class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const find_paths = function(root, sum) {
  allPaths = [];
  // TODO: Write your code here
  function DFT(root, sum, path = []) {
    path.push(root.value)
    if (root.left === null && root.right === null) { 
      // path.push(root.value)
      if (root.value === sum) { allPaths.push([...path]); }; 
      // path.pop()
    }
    else if (root.left !== null && root.right === null) {
      // path.push(root.value)
      DFT(root.left, sum - root.value, path)
      // path.pop()
    }
    else if (root.left === null && root.right !== null) {
      // path.push(root.value)
      DFT(root.right, sum - root.value, path)
      // path.pop()
    }
    else {
      // path.push(root.value)
      DFT(root.left, sum - root.value, path)
      DFT(root.right, sum - root.value, path)
      // path.pop()
    }
    path.pop()
  }
  DFT(root, sum)
  console.log(allPaths)
  return allPaths;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
console.log(`Tree paths with sum: ${sum}: ${find_paths(root, sum)}`)


const find_paths = function(root, sum) {
  allPaths = [];

  function DFT(root, sum, path = []) {
    path.push(root.value)
    if (root.left === null && root.right === null) { 
      if (root.value === sum) { allPaths.push([...path]); }; 
    }
    else if (root.left !== null && root.right === null) {
      DFT(root.left, sum - root.value, path)
    }
    else if (root.left === null && root.right !== null) {
      DFT(root.right, sum - root.value, path)
    }
    else {
      DFT(root.left, sum - root.value, path)
      DFT(root.right, sum - root.value, path)
    }
    path.pop()
  }
  
  DFT(root, sum)
  console.log(allPaths)
  return allPaths;
};


