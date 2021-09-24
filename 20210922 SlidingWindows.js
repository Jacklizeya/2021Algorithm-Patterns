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


// A better solution with Sliding window

const smallest_subarray_with_given_sum = function(s, arr) {
  // TODO: Write your code here
  let sum = 0
  let leftIndex = 0
  let minLength = Infinity

  for (let rightIndex = 0; rightIndex < arr.length; rightIndex++) {
   sum = sum + arr[rightIndex]
    while (sum >= s) {
      // do one calculation every time
      minLength = Math.min(minLength, rightIndex - leftIndex + 1)
      sum = sum - arr[leftIndex]
      leftIndex ++
    }

  }

   console.log(minLength)
};
