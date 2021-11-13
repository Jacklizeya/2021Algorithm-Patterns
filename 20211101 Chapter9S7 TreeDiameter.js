class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


class TreeDiameter {

    constructor() {
        this.treeDiameter = 0;
    }

    find_diameter(root) {
        // TODO: Write your code here

        findAndAssignRadius(root)
        let maxDiameter = - Infinity
        findDiameter(root)
        return maxDiameter

        function findAndAssignRadius(node) {
            if (node.left === null && node.right === null) { node.radius = 1; }
            else if (node.left !== null && node.right === null) { node.radius = findAndAssignRadius(node.left) + 1; }
            else if (node.left === null && node.right !== null) { node.radius = findAndAssignRadius(node.right) + 1; }
            else { node.radius = Math.max(findAndAssignRadius(node.left), findAndAssignRadius(node.right)) + 1; }
            return node.radius
        }

        function findDiameter(node) {
            if (node.left === null && node.right === null) { node.diameter = 1; }
            else if (node.left !== null && node.right === null) { node.diameter = node.left.radius + 1; findDiameter(node.left)}
            else if (node.left === null && node.right !== null) { node.diameter = node.right.radius + 1; findDiameter(node.right)}
            else { node.diameter = node.left.radius + node.right.radius + 1; findDiameter(node.left); findDiameter(node.right)}

            if (node.diameter > maxDiameter) {maxDiameter = node.diameter}
        }


    }
};


var treeDiameter = new TreeDiameter()
var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
