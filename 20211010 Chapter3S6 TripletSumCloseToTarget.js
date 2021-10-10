const search_triplets = function (arr, target) {
  arr = arr.sort((a, b) => { return a - b })
  let gap = Infinity
  let closestSum
  // TODO: Write your code here

  for (let i = 0; i < arr.length - 2; i++) {
    // prevent duplicates

    let leftIndex = i + 1
    let rightIndex = arr.length - 1

    while (leftIndex < rightIndex) {
      let currentTotal = arr[i] + arr[leftIndex] + arr[rightIndex]
      if (Math.abs(currentTotal - target) < gap) { gap = Math.abs(currentTotal - target); closestSum = currentTotal }

      if (currentTotal === target) {
        break;
      }
      else if (currentTotal < target) {
        leftIndex++
      }
      else {
        rightIndex--
      }
    }
  };

  return closestSum;
}

let Input = [1, 0, 1, 1], target = 100
console.log(search_triplets(Input, target))


// There are lots of combination we need to try
