class TreeNode {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const find_sum_of_path_numbers = function (root) {
    // TODO: Write your code here
    let sum = 0
    exploreAndComeBack(root)
    return sum

    function exploreAndComeBack(root, array = [root.value]) {
        if (root.left === null && root.right === null) {
            sum += calculateSum(array)
            array.pop()
        }
        else if (root.left === null && root.right !== null) {
            array.push(root.right.value)
            exploreAndComeBack(root.right, array)
            array.pop()
        }
        else if (root.left !== null && root.right === null) {
            array.push(root.left.value)
            exploreAndComeBack(root.left, array)
            array.pop()
        }
        else if (root.left !== null && root.right !== null) {
            array.push(root.left.value)
            exploreAndComeBack(root.left, array)
            array.push(root.right.value)
            exploreAndComeBack(root.right, array)
        }
    }

    function calculateSum(array) {
        let sum = 0
        let maximumPower = array.length - 1
        for (let i = 0; i <= maximumPower; i++) {
            sum += array[i] * Math.pow(10, maximumPower - i)
        }
        return sum
    }
};



var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)
