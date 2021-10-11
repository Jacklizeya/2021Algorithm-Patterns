const triplet_with_smaller_sum = function(arr, target) {
  arr.sort((a, b) => {return a -b})
  // TODO: Write your code here
  let count = 0
  for (let i =0 ; i < arr.length - 2; i++) {
    count += findPairs(arr, target - arr[i], i)
  }
  return count;
};

function findPairs(arr, sum, xIndex) {
  let leftIndex = xIndex + 1
  let rightIndex = arr.length - 1
  let count = 0
  while (leftIndex < rightIndex) {
    if (arr[leftIndex] + arr[rightIndex] < sum) {count += rightIndex - leftIndex; leftIndex++}
    else {rightIndex--}
  }
  return count
}

console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3));
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));

// Some Logic around line 16 - 17, if it is smaller, add all the combinations
// if it is bigger, reduce rightIndex
