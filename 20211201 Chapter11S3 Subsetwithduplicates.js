// some hard logic involve here, keeping push my copy + extra for each one

const find_subsets = function(nums) {
    subsets = [];
    subsets.push([])
    // TODO: Write your code here
    for (let i =0; i < nums.length; i++) {
            let num = nums[i]
            let subsetsCopy = [...subsets]
            subsetsCopy.forEach(element => {
            let newElement = [...element]
            // if they are not equal, you can do whatever
            if (nums[i] !== nums[i - 1]) {  
                newElement.push(num)
                console.log("new Element", newElement)
                subsets.push(newElement)}
            // if they are equal, only push to those has added, do not push to those not added yet
            else {
                if (newElement[newElement.length - 1] === nums[i]) {
                    newElement.push(num)
                    console.log("new Element", newElement)
                    subsets.push(newElement)}
                }
            }
        )
    }
    console.log("final subsets", subsets)
    return subsets;
  };
  
  
//   console.log(`Here is the list of subsets: ${find_subsets([1, 3, 3])}`)
  console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`)
  
