const make_squares = function(arr) {
  let square = Array(arr.length - 1).fill(0)
  let indexInSquare = arr.length - 1
  let leftPointer = 0
  let rightPointer = arr.length - 1
  while (leftPointer <= rightPointer) {
    console.log(leftPointer, rightPointer)
    if (Math.abs(arr[leftPointer]) > Math.abs(arr[rightPointer])) {
      square[indexInSquare] = arr[leftPointer] * arr[leftPointer]
      leftPointer++
    }
     else {
      square[indexInSquare] = arr[rightPointer] * arr[rightPointer]
      rightPointer--
     }
     indexInSquare--
  }
  return square
};

console.log(make_squares([-2, -1, 0, 2, 3]))


// The real optimization is fill it with 0 then change the number!
