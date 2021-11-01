class TreeNode {

    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};


const find_successor = function (root, key) {
    // TODO: Write your code here
    let indicator  = false

    let queue = [root]
    while (queue.length > 0) {
        let currentNode = queue.shift()
        if (indicator === true) {return currentNode.value}
        if (currentNode && currentNode.value === key) {indicator = true}
        
        if (currentNode.left) {queue.push(currentNode.left)}
        if (currentNode.right) {queue.push(currentNode.right)}

    }
    return null;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12)
if (result != null)
    console.log(result.val)
result = find_successor(root, 9)
if (result != null)
    console.log(result.val)
