const find_substring = function(str, pattern) {
    // TODO: Write your code here
    let result = ""
    let patternStorage = {}
    for (let char of pattern) {
        if (patternStorage[char] === undefined) {patternStorage[char] = 1} 
        else {patternStorage[char] ++}
    }
    let uniqueCharacters = Object.keys(patternStorage).length
    console.log("patternStorage", patternStorage)
    // find the first window
    let matched = 0
    let strStorage = {}
    let index = 0
    while (index < str.length) {
            let char = str[index]
            if (strStorage[char] === undefined) {strStorage[char] = 1} else {strStorage[char] ++}
        
            if (strStorage[char] === patternStorage[char]) {matched++}
            if (matched === uniqueCharacters) {break;}
        index++
    }
    // Analyze the result if I did not find anything
    if (index === str.length ) { console.log("I went over the index"); return result}
   // expand and shrink the window, if I find something

   let minLength = Infinity
   let left = 0
   let right = index
   while (right < str.length) {
    //    console.log("right", right, "left", left, strStorage)
        // shrinking
        while (left <= right) {
            let tentativeDeleteChar = str[left]
            // console.log("tentative Delete", tentativeDeleteChar)
            if ((! (tentativeDeleteChar in patternStorage)) || strStorage[tentativeDeleteChar] - 1 >= patternStorage[tentativeDeleteChar]) {left++; strStorage[tentativeDeleteChar]--} else {
                if (right - left + 1 < minLength) {minLength = right - left + 1; result = str.substring(left, right + 1); }
                break;
            }
        }
        // expanding
        right++
        let newChar = str[right]
        if (strStorage[newChar] === undefined) {strStorage[newChar] = 1} else {strStorage[newChar] ++}
   }
   return result
}
  

console.log(find_substring("aabdec", "abc"))
console.log(find_substring("abdbca", "abc"))
console.log(find_substring("adcad", "abc"))
