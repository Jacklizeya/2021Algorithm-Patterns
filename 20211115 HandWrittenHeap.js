class minHeap {
  constructor(array) {
    this.heap = this.initialize(array)
  }

  initialize(inputArray) {
    console.log(inputArray)
    let lastParentIndex = Math.floor( (inputArray.length - 2 ) /2)
    for (let i = lastParentIndex; i >=0 ; i--) {
      this.siftDown(i, inputArray)
    }
    return inputArray
  }

  pop() {
    this.swap(0, this.heap.length - 1, this.heap)
    this.heap.pop()
    this.siftDown(0, this.heap)
  }

  siftDown(i, inputArray) {
    // have child
    while (2 * i + 1 < inputArray.length) {
    // one child
    if ( 2 * i + 2 >= inputArray.length) {
      if (inputArray[2 * i + 1] < inputArray[i]) {this.swap(2 * i + 1, i, inputArray); i = 2 * i + 1 } else {break;}
    } 
    // two children
    else if ( 2 * i + 2 < inputArray.length) {
      if (inputArray[2 * i + 1] < inputArray[i] && inputArray[2 * i + 1] <= inputArray[2 * i + 2]) {this.swap(2 * i + 1, i, inputArray); i = 2 * i + 1}
      else if (inputArray[2 * i + 2] < inputArray[i] && inputArray[2 * i + 2] <= inputArray[2 * i + 1]) {this.swap(2 * i + 2, i, inputArray); i = 2 * i + 2}
      else {break;}
    } 
  } 
  }


  insert(element) {
    this.heap.push(element)
    console.log(this.heap)
    let currentIndex = this.heap.length - 1
    while (currentIndex > 0) {
      console.log(this.heap[currentIndex], this.heap[Math.floor((currentIndex - 1) / 2)])
      if (this.heap[currentIndex] < this.heap[Math.floor((currentIndex - 1) / 2)]) { this.swap(currentIndex, Math.floor((currentIndex - 1) / 2), this.heap); currentIndex = Math.floor((currentIndex - 1) / 2)} else {break}
    }
  }


  swap(i, j, array) {
    let temporary = array[i]
    array[i] = array[j]
    array[j] = temporary
  }
}


let testHeap = new minHeap([3, 4, 5, 1, 2, 6, 10])
testHeap.insert(0)
testHeap.pop()
console.log(testHeap.heap)
