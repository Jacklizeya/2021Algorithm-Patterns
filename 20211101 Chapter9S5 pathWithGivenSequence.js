class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  
  const find_path = function(root, sequence) {
    // TODO: Write your code here
    let result = false
    DFS(root)
    return result


    function DFS(root, path = []) {
        path.push(root.value)
        if (root.left === null && root.right === null) {
            console.log("Get one", path)
            if (CheckPath(path)) {result = true; }
        }
        else if (root.left !== null && root.right === null) {
            DFS(root.left, path)
        }
        else if (root.left === null && root.right !== null) {
            DFS(root.right, path)
        }
        else {
            DFS(root.left, path);
            DFS(root.right, path)
        }
        path.pop()
    }

    function CheckPath(array) {
        if (array.join("") === sequence.join("")) {return true} else {return false}
    }


  };
  
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  
  console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
  console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
  
