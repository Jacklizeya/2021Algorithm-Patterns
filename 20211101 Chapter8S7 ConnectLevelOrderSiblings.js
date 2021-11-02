class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
};

const connect_level_order_siblings = function(root) {
  // TODO: Write your code here
  let queue = [root]
  root.next = null

  while (queue.length > 0) {
    // start with the old level
    let levelCount = queue.length
    for (let i = 0; i < levelCount; i++) {
      let currentNode = queue.shift()
      if (currentNode.left !== null) {queue.push(currentNode.left)}
      if (currentNode.right !== null) {queue.push(currentNode.right)}
    }
    // finish with the new level
    if (queue.length > 0) {
      for (let i = 0; i < queue.length - 1 ; i++) {
      queue[i].next = queue[i + 1]
      }
      queue[queue.length - 1].next = null
    }
    
  }

};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

root.print_level_order()
