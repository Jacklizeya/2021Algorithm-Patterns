const search_triplets = function (arr) {
  arr = arr.sort((a, b) => { return a - b })
  let triplets = [];
  // TODO: Write your code here

  for (let i = 0; i < arr.length - 3; i++) {
    console.log(i)
    // prevent duplicates
    if (arr[i] === arr[i - 1]) { continue }

    let leftIndex = i + 1
    let rightIndex = arr.length - 1

    while (leftIndex < rightIndex) {
      let currentTotal = arr[i] + arr[leftIndex] + arr[rightIndex]
      if (currentTotal === 0) {
        triplets.push([arr[i], arr[leftIndex], arr[rightIndex]]);
        leftIndex++
        rightIndex--
        // prevent duplicates
        while (arr[leftIndex] === arr[leftIndex - 1]) { leftIndex++ }
        while (arr[rightIndex] === arr[rightIndex + 1]) { rightIndex-- }
      }
      else if (currentTotal < 0) { leftIndex++ }
      else { rightIndex-- }
    }

  }
 return triplets;
};

let Input = [-3, 0, 1, 2, -1, 1, -2]
console.log(search_triplets(Input))


// Be thoughtful for any duplicates
