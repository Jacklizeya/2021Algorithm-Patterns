let profits = [1, 6, 10, 16];
let weights = [1, 2, 3, 5];
let capacity = 7;
let total = []

let solveKnapsack = function(profits, weights, capacity) {


  // how much profit I can get based on this situation
  function knapsackRecursive(profits, weights, capacity, currentIndex) {
    // in the following case I will not get any profit
    // recursive call after choosing the element at the currentIndex
    // if the weight of the element at currentIndex exceeds the capacity, we shouldn't process this
    if (capacity <=0 || currentIndex >= profits.length) {return 0}
    
    let profit1 = 0
    if (capacity >= weights[currentIndex]) {
      profit1 = profits[currentIndex] + knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1)
    }
   
    let profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1)
    return Math.max(profit1, profit2)
  }

  return knapsackRecursive(profits, weights, capacity, 0);
};

console.log(solveKnapsack(profits, weights, capacity))
console.log(total)


// Bottom up Dynamic Programming


var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
var capacity = 7 

const dp = Array(profits.length).fill(0).map(() => Array(capacity + 1).fill(0));
console.log(dp)

for (let col =0 ; col <= capacity ; col++ ) {
  if (weights[0] <= capacity) {dp[0][col] = profits[0]}
}

for (let row =0 ; row < weights.length ; row++ ) {
  dp[row][0] = 0
}

for (let row = 1; row < weights.length; row++) {
  for (let col = 1; col <= capacity; col++) {
    console.log(row, col)
    let profits1 = dp[row - 1][col]

    let profits2 = 0
    if (col - weights[row] >=0 ) {profits2 = profits[row] + dp[row- 1][ col - weights[row]]}
    
    dp[row][col] = Math.max(profits1, profits2)
  }
}


console.log(dp)
// How to get the Path
let totalProfit = dp[weights.length - 1][capacity]
console.log(totalProfit)

let result = ""
let colPointer = capacity
for (let rowPointer = weights.length - 1; rowPointer >= 1 ; rowPointer--) {
  console.log(rowPointer, colPointer)
  if (dp[rowPointer][colPointer] === dp[rowPointer - 1][colPointer]) {}
  else {result += rowPointer; colPointer = colPointer - weights[rowPointer]; totalProfit = totalProfit - profits[rowPointer]}
}

if (colPointer !== 0) {result += "0"}
console.log(colPointer, result)
