class minHeap {
    constructor(inputArray) {
        this.heap = this.initialize(inputArray)
    }

    initialize(inputArray) {
        let lastParentIndex = Math.floor((inputArray.length - 2) / 2 )
        for (let i = lastParentIndex; i >=0; i--) {
            this.siftDown(i, inputArray)
        }
        return inputArray
    }

    siftDown(i, array) {
        while ( 2 * i + 1 < array.length) {
            if ( 2 * i + 2 < array.length) {
                // two children
                if (array[2 * i + 1] < array[i] && array[2* i + 1] <= array[2 *i + 2]) {swap(i, 2 * i +1, array); i= 2* i + 1} 
                else if (array[2 * i + 2] < array[i] && array[2* i + 2] <= array[2 *i + 1]){swap(i, 2 * i + 2, array); i = 2* i +2 }
                else {break;}
            }
            else {
                // one child
                if (array[2 * i + 1] < array[i]) {swap(i, 2 * i +1, array)} else {break;}
            }
        }
    }

    bubbleUp(i) {
        while (i > 0) {
            let childIndex =Math.floor(( i - 1) / 2)
            if (this.heap[i] < this.heap[childIndex]) {swap(i, childIndex, this.heap); i = childIndex} else {break;}
        }

    }

    pop() {
        swap(0, this.heap.length - 1, this.heap)
        this.heap.pop()
        this.siftDown(0, this.heap)
    }

    insert(element) {
        this.heap.push(element)
        this.bubbleUp(this.heap.length - 1)
    }
}


function swap(i, j, array) {
    let temporary = array[i]
    array[i] = array[j]
    array[j] = temporary 
}

let testHeap = new minHeap([4, 5, 2, 7, 8 , 0 , 1, 3, 6, 9])
console.log(testHeap.heap)
testHeap.pop()
console.log(testHeap.heap)
testHeap.insert(-1)
console.log(testHeap.heap)
