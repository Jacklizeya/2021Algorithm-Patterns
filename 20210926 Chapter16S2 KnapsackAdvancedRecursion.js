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
