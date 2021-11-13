const find_string_anagrams = function (str, pattern) {
    result_indexes = [];
    // TODO: Write your code here
    let patterLength = pattern.length
    let missingCountMap = {}
    // Build the map
    for (let i = 0; i < patterLength; i++) {
        let char = pattern[i]
        if (missingCountMap[char] === undefined) { missingCountMap[char] = 1 } else { missingCountMap[char]++ }
    }
    // counter for how many got matched so far
    let matched = 0

    for (let j = 0; j < str.length; j++) {
        let newChar = str[j]

        if (missingCountMap[newChar] === 1) { matched++ } else if (missingCountMap[newChar] === 0) { matched-- }
        missingCountMap[newChar]--

        if (j >= patterLength) {
            let deleteChar = str[j - patterLength]
            if (missingCountMap[deleteChar] === -1) { matched++ } else if (missingCountMap[deleteChar] === 0) { matched-- }
            missingCountMap[deleteChar]++
        }
        console.log("currentIndex", j, missingCountMap, matched)
        if (matched === patterLength) { result_indexes.push(j - patterLength + 1) }
    }

    return result_indexes;

};

console.log(find_string_anagrams("abbcabc", "abc"))
