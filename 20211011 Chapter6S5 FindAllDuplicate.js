const find_duplicate = function(nums) {

  // TODO: Write your code here
  let i = 0
  while (i < nums.length) {

    let value = nums[i]
    if (value !== i + 1) {
      if (nums[i] === nums[value - 1]) {return nums[i]} else 
     { [ nums[i], nums[value - 1] ] = [ nums[value - 1], nums[i] ]}
    } else {i++}
  }

};

console.log(find_duplicate([1, 4, 4, 3, 2]));
console.log(find_duplicate([2, 1, 3, 3, 5, 4]));
console.log(find_duplicate([2, 4, 1, 4, 4]));
