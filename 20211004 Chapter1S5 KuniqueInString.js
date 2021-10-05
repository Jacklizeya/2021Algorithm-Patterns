const longest_substring_with_k_distinct = function(str, k) {
  // TODO: Write your code here

  console.log(str, k)
  let object = {}
  let leftPointer = 0
  let rightPointer = 0
  object[str[rightPointer]] = 1

  while (Object.keys(object).length < k) {
    let char = str[rightPointer]
    if (object[char]) {object[char]++} else {
      object[char] = 1
    }
    rightPointer++
  }
  
  let maximumLength = rightPointer - leftPointer + 1
  console.log("initial", maximumLength)

  while (rightPointer < str.length) {
    rightPointer++
   
    let char = str[rightPointer]
    if (object[char]) {object[char]++} else {
      object[char] = 1
    }
    console.log("round", str.substring(leftPointer, rightPointer + 1 ), Object.keys(object).length)

    while (Object.keys(object).length > k) {
    leftPointer++
    let char = str[leftPointer - 1]
    object[char]--
    if (object[char] === 0) {delete object[char]}
    }

    maximumLength = Math.max(maximumLength, rightPointer - leftPointer + 1)

  }

  return maximumLength


};

console.log (longest_substring_with_k_distinct("araaci", 1))
