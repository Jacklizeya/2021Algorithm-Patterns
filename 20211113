class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  
  const find_maximum_path_sum = function(root) {
    // TODO: Write your code here
    assignToLeafRadiusWeight(root)
    let maxPath = - Infinity
    assignPathWeight(root)
    return maxPath
    // step one, build the fundamental layer
    function assignToLeafRadiusWeight(node) {
        if (node.left == null && node.right === null) { node.toLeaveRadiusWeight = node.value;}
        else if (node.left != null && node.right === null) {node.toLeaveRadiusWeight = assignToLeafRadiusWeight(node.left) + node.value; }
        else if (node.left == null && node.right !== null) {node.toLeaveRadiusWeight = assignToLeafRadiusWeight(node.right) + node.value; }
        else {node.toLeaveRadiusWeight = Math.max(assignToLeafRadiusWeight(node.left), assignToLeafRadiusWeight(node.right)) + node.value; }
        // Prevent negative value
        if (node.toLeaveRadiusWeight < 0) { node.toLeaveRadiusWeight = 0}
        return node.toLeaveRadiusWeight
    }
    // step two, build path based on fundamental layer
    function assignPathWeight(node) {
        if (node.left == null && node.right === null) { node.pathWeight = node.value;}
        else if (node.left != null && node.right === null) {node.pathWeight = node.left.toLeaveRadiusWeight + node.value; assignPathWeight(node.left)}
        else if (node.left == null && node.right !== null) {node.pathWeight = node.right.toLeaveRadiusWeight + node.value; assignPathWeight(node.right)}
        else {node.pathWeight = node.left.toLeaveRadiusWeight + node.right.toLeaveRadiusWeight + node.value; assignPathWeight(node.left); assignPathWeight(node.right)}

        if (node.pathWeight > maxPath) {maxPath = node.pathWeight}
    }

  };
  
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
  
  root.left.left = new TreeNode(1)
  root.left.right = new TreeNode(3)
  root.right.left = new TreeNode(5)
  root.right.right = new TreeNode(6)
  root.right.left.left = new TreeNode(7)
  root.right.left.right = new TreeNode(8)
  root.right.right.left = new TreeNode(9)
  console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
  
  root = new TreeNode(-1)
  root.left = new TreeNode(-3)
  console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
  
