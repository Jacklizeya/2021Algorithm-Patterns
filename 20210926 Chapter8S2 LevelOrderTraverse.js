class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const traverse = function(root) {

  // TODO: Write your code here
  let result = [[root.value]]
  let queue = [root]
  while (queue.length > 0) {

    let levelSize = queue.length;
    let nextLevel = []
    for (i= 0; i <levelSize; i++) {
       current = queue.shift()
      if (current.left !== null) {nextLevel.push(current.left)}
      if (current.right !== null) {nextLevel.push(current.right)}
    }
  
  console.log(nextLevel)
  queue.push(...nextLevel)
  nextLevel.forEach(element => result.push(element.value))
  }
   return result;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
