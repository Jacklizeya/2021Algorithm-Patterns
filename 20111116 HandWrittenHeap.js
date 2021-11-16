class minHeap {
    constructor(array) {
        this.heap = this.initialize(array)
    }

    initialize(inputArray) {
        let lastParent = Math.floor(( inputArray.length - 2 )/ 2)
        for (let i = lastParent; i >=0; i--) {
            this.siftDown(i, inputArray)
        }
        return inputArray
    }

    siftDown(i, array) {
        while( 2 * i + 1 < array.length) {
            if ( 2 * i + 2 < array.length) {
                // two children
                let current = array[i]
                let leftChild = array[2 * i + 1]
                let rightChild = array[2 * i + 2]
                if (leftChild < current && leftChild <= rightChild) {this.swap(i, 2 * i+ 1, array); i = 2* i + 1}
                else if (rightChild < current && rightChild <= leftChild) {this.swap(i, 2 * i +2, array); i = 2* i + 2}
                else {break;}
            } 
            else {
                // one children
                if (array[2 * i + 1] < array[i]) {this.swap(i, 2 * i +1, array); i = 2 * i + 1} else {break;} 
            }
        }
   }

    bubbleUp(i) {
        while( i > 0) {
            if (this.heap[i] < this.heap[Math.floor((i - 1) / 2)] ) {
                this.swap(i, Math.floor((i - 1) / 2), this.heap)
                i = Math.floor((i - 1) / 2)
            } else {break;}
        }
    }


    pop (){
        this.swap(0, this.heap.length - 1, this.heap)
        this.heap.pop()
        this.siftDown(0, this.heap)
    }

    insert(number) {
        this.heap.push(number)
        this.bubbleUp(this.heap.length - 1)
    }

    swap(i, j, array) {
        let temporary = array[i]
        array[i] = array[j]
        array[j] = temporary
    }

}




    //           0
    //     1           2
    // 3       4   5   6    

let testHeap = new minHeap([4, 5, 2, 7, 8 , 0 , 1, 3, 6, 9])
testHeap.pop()
testHeap.insert(-1)
console.log(testHeap.heap)
