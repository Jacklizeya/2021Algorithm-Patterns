const dutch_flag_sort = function(arr) {
    // TODO: Write your code here
    let zeroOccupier = -1
    let twoOccupier = arr.length
    let explorer = 0

    while (explorer < twoOccupier) {
        let currentNumber = arr[explorer]
        if (currentNumber === 0) {
            zeroOccupier++
            swap(zeroOccupier, explorer, arr)
            explorer++
        } else if (currentNumber === 1) {
            explorer++
        } else {
            twoOccupier--
            swap(explorer, twoOccupier, arr)
        }
    }
    console.log(arr)
    return arr
  };
  
function swap(index1, index2, array) {
    let temporary = array[index1]
    array[index1] = array[index2]
    array[index2] = temporary
}  

dutch_flag_sort([0,0,0,0,2,2,2,2,1,1,1,1,1])
