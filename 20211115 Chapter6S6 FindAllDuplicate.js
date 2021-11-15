const find_all_duplicates = function(nums) {
    duplicateNumbers = [];
    // TODO: Write your code here

    for (let i = 0; i < nums.length; i++) {


        while (nums[i] !== i + 1) {
            if (nums[i] === nums[nums[i] - 1]) {duplicateNumbers.push(nums[i]); break;}
             swap(i, nums[i] - 1, nums)
        }
    }

    return duplicateNumbers;
  };

console.log(find_all_duplicates([5, 4, 7, 2, 3, 5, 3]))
  

function swap (i, j, array) {
    let temporary = array[i]
    array[i] = array[j]
    array[j] = temporary
}
