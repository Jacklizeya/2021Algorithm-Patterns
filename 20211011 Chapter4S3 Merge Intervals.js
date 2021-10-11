
const insert = function(intervals, new_interval) {
  let merged = [];
  // TODO: Write your code here

  if (new_interval[0] < intervals[0][0]) {
    let leftValue = new_interval[0]
    let rightValue = new_interval[1]
    let currentIndex = 0
    while(currentIndex < intervals.length) {
      console.log("currentIndex", currentIndex)
      if (intervals[currentIndex][0] > rightValue) { 
        merged.push([leftValue, rightValue])
        leftValue = intervals[currentIndex][0]
        rightValue = intervals[currentIndex][1]
      }
      else {
        rightValue = Math.max(rightValue, intervals[currentIndex][1])
        currentIndex++
      }
    }
    // merged.push([leftValue, rightValue])
    // merged.push(...intervals.slice(currentIndex, intervals.length))
    console.log("Finish merging the rightOnes", merged)
  
    return merged;
  }



  // find the first one 
  let firstSmallerThanMeIndex = 0
  while (firstSmallerThanMeIndex < intervals.length) {
    if (new_interval[0] >= intervals[firstSmallerThanMeIndex][0]) {break;}
    firstSmallerThanMeIndex++
  }
  console.log("Find the first smalelr than me Index", firstSmallerThanMeIndex)
  // push everything before
  for (let i = 0; i < firstSmallerThanMeIndex; i++ ) {
    merged.push(intervals[i])
  }

  let leftValue
  let rightValue

  // check my left
  if (intervals[firstSmallerThanMeIndex][1] < new_interval[0]) {
    merged.push(intervals[firstSmallerThanMeIndex])
    leftValue = new_interval[0]
    rightValue = new_interval[1]
  }
  else {
    leftValue = intervals[firstSmallerThanMeIndex][0]; 
    rightValue = Math.max( intervals[firstSmallerThanMeIndex][1], new_interval[1]) }


    console.log("Finish merging the left one", leftValue, rightValue)

  // check my right
  let currentIndex = firstSmallerThanMeIndex + 1
  while(currentIndex < intervals.length) {
    console.log("currentIndex", currentIndex)
    if (intervals[currentIndex][0] > rightValue) { 
      break;
    }
    else {
      rightValue = Math.max(rightValue, intervals[currentIndex][1])
      currentIndex++
    }
  }
  merged.push([leftValue, rightValue])
  merged.push(...intervals.slice(currentIndex, intervals.length))
  console.log("Finish merging the rightOnes", merged)

  return merged;
};

// let intervals = [[1,3], [5,7], [8,12]], new_interval = [4, 6]
// let intervals = [[1,3], [5,7], [8,12]], new_interval = [4, 12]
let intervals=[[2,3],[5,7]], new_interval=[1,4]

insert(intervals, new_interval)


// Better Solution, So Elegant

const insert = function(intervals, new_interval) {
  let merged = [];
  // TODO: Write your code here
  let i = 0


  // absolute no overlapping
  while (i < intervals.length && intervals[i][1] < new_interval[0]) {
    merged.push(intervals[i])
    i++
  }  

  let leftValue = new_interval[0]
  let rightValue = new_interval[1]
  while (i < intervals.length && rightValue > intervals[i][0]) {
    leftValue = Math.min(leftValue, intervals[i][0])
    rightValue = Math.max(rightValue, intervals[i][1])
    i++
  }  

  merged.push([leftValue, rightValue])
  while (i < intervals.length) {
    merged.push(intervals[i])
    i++
  }  
  console.log(merged)
  return merged
};
