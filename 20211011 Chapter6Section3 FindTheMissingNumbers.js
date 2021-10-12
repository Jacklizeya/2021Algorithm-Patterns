const find_missing_number = function(nums) {
  // TODO: Write your code here
 nums.push("x")
 let i = 0
 while (i < nums.length) {
  let value = nums[i]
  // if (value === "x") {i++; continue}
  if (value !== i && value !== "x") {
    [nums[i], nums[value]] = [nums[value], nums[i]]
  } else {i++}
 }
 console.log(nums)
  i = 0
 while (i < nums.length) {
   if (nums[i] === "x") {return i}
   i++
 }

};

console.log(find_missing_number([4, 0, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));
