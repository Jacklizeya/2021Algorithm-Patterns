// My old way of doing things
const find_subsets = function(nums) {
  let result = []
  // TODO: Write your code here
  add(nums, [])
  console.log(result)

  function add(currentArray, collectionArray) {
    console.log(currentArray, collectionArray)
    if (currentArray.length === 0 ) { result.push(collectionArray); return}
    
    let newCurrentArray = [...currentArray]
    let path = newCurrentArray.shift()
    let copyCollectionArray = [...collectionArray]

    let anotherCopyCollectionArray = [...collectionArray]
    anotherCopyCollectionArray.push(path)


    add(newCurrentArray, copyCollectionArray)
    add(newCurrentArray, anotherCopyCollectionArray)

  }
};



console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`)
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`)


// New way of doing things, not that much improved

const find_subsets = function(nums) {
  subsets = [[]];
  // TODO: Write your code here

  for (let num of nums) {
    let length = subsets.length
    for (i =0 ; i < length; i++) {
      let element = [...subsets[i]]
      element.push(num)
      subsets.push(element)
    }
  }

  console.log(subsets)
  return subsets;
};


console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`)
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`)
