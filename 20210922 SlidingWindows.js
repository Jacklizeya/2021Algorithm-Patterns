const smallest_subarray_with_given_sum = function (s, arr) {
  // TODO: Write your code here
  let targetIndex
  let max = 0
  console.log("Here")
  for (let i = 0; i < arr.length; i++) {
    console.log("i and max", i, max)
    if (arr[i] > max) { max = arr[i]; targetIndex = i }
  }
  console.log("targetIndex", targetIndex)
  let sum = max
  let leftIndex = targetIndex - 1
  let rightIndex = targetIndex + 1
  while (sum < s) {
    if (leftIndex >= 0 && rightIndex >= arr.length) {
      sum = sum + arr[leftIndex]; leftIndex--
    }
    else if (leftIndex >= 0 && rightIndex < arr.length) {
      if (arr[leftIndex] > arr[rightIndex]) { sum = sum + arr[leftIndex]; leftIndex-- }
      else { sum = sum + arr[rightIndex]; rightIndex++ }
    }
    else if (leftIndex < 0 && rightIndex < arr.length) { sum = sum + arr[rightIndex]; rightIndex++ }
    else { }
  }
 console.log("left and right", leftIndex, rightIndex)
  if (sum >= s) { return rightIndex - leftIndex - 1 } else { return 0 }
};
