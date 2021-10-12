const find_missing_numbers = function(nums) {
  missingNumbers = [];
  // TODO: Write your code here
  let i = 0
  while (i < nums.length) {

    let value = nums[i]
    if (value !== i + 1 && nums[i] !== nums[value - 1]) {
      // if (nums[i] === nums[value - 1]) {missingNumbers.push(i+1); i++} else 
     { [ nums[i], nums[value - 1] ] = [ nums[value - 1], nums[i] ]}
    } else {i++}
  }

  i = 0
  while (i < nums.length) {
    value = nums[i]
    if (value !== i + 1) {missingNumbers.push(i + 1)}
    i++
  }

  return missingNumbers;
};

console.log(find_missing_numbers([2, 3, 1, 8, 2, 3, 5, 1]));
console.log(find_missing_numbers([2, 4, 1, 2]));
console.log(find_missing_numbers([2, 3, 2, 1]));
