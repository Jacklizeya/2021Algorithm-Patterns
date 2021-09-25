const remove_duplicates = function (arr) {
  // TODO: Write your code here
  let keeper = 0
  let explorer = 0

  while (explorer < arr.length - 1) {
    if (arr[explorer] !== arr[explorer + 1]) { 
      arr[keeper + 1] = arr[explorer + 1]
      keeper ++
     }
    explorer++
  }

  return keeper + 1
};

console.log(remove_duplicates([2, 2, 2, 11]))
