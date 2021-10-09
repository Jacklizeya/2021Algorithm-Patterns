const length_of_longest_substring = function(arr, k) {
  // TODO: Write your code here
  let OneCountInWindow = 0
  let maxOneCount = 0
  let startIndex = 0
  let maxLength = 0

  for (let endIndex = 0; endIndex < arr.length; endIndex++) {
    if (arr[endIndex] === 1) { OneCountInWindow++ }
    maxOneCount = Math.max(maxOneCount, OneCountInWindow)

    while (endIndex - startIndex + 1 > maxOneCount + k) {
      if (arr[startIndex] === 1) { OneCountInWindow--}
      startIndex++
    }

    maxLength = Math.max(maxLength, endIndex - startIndex + 1 )
    // console.log(`startIndex is ${startIndex}, endIndex is ${endIndex}, maxLength is ${maxLength}`)
  }

  return maxLength
};
