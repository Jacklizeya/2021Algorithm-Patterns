const cyclic_sort = function(nums) {
  // TODO: Write your code here
  let round = 0
  for (i = 0; i < nums.length; i++) {
    console.log(nums[i], i)
    if (nums[i] !== i + 1 ) {swap(nums[i] - 1, i, nums); i--} 
    console.log(nums)
    round++
    if (round === 10)  {break;}
  }
  return nums;
}

function swap(i, j, array) {
  let storage = array[j]
  array[j] = array[i]
  array[i] = storage
}


console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)
