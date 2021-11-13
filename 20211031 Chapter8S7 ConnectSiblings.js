class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
    
    // tree traversal using 'next' pointer
    print_tree() {
      let result = "Traversal using 'next' pointer: ";
      let current = this;
      while (current != null) {
        result += current.value + " ";
        current = current.next;
      }
      console.log(result);
    }
  };
  
  const connect_all_siblings = function(root) {
    // TODO: Write your code here

    let level = [root]
    while (level.length > 0) {
        let levelLength = level.length
        // delete the first element a few times and build next level
        for (let i= 0; i < levelLength; i++) {
            let currentNode = level.shift()
            if (currentNode.left) {level.push(currentNode.left);}
            if (currentNode.right) {level.push(currentNode.right);}

            // when it is the last one in that level
            if (i === levelLength - 1) {currentNode.next = level[0]}
        }
        // new level is formed, build next connection
        for (let j =0; j < level.length -1; j++) {
            level[j].next = level[j+1]
        }

    }
  };
  
  
  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  connect_all_siblings(root)
  root.print_tree()
  
