function find_word_concatenation(str, words) {
    let wordFrequencyMap = {}
    for (let word of words) {
        if (wordFrequencyMap[word]) {wordFrequencyMap[word]++} else {
            wordFrequencyMap[word] = 1
        }
    }
    console.log("word Frequency Map", wordFrequencyMap)
    let result = []
    let wordLength = words[0].length
    let wordsCount = words.length
    let desiredStringLength = wordLength * wordsCount
    console.log("str", str)
    for (let i =0; i < str.length - desiredStringLength + 1; i++) {
        let subString = str.substring(i, i + desiredStringLength)
        console.log("round", i, "subString", subString)
        if (doesItMatchWords(subString)) {result.push(i)}

    }
    return result

    function doesItMatchWords(string) {
        console.log("does it match", string, wordFrequencyMap)
        let stringMap = {}
        for (let i =0; i < string.length - wordLength + 1; i = i + wordLength) {
            let subString = string.substring(i, i + wordLength)
            if (stringMap[subString]) {stringMap[subString]++} else {stringMap[subString] = 1}
        }
        console.log("line 29", stringMap)
        for (let key in stringMap) {
            if (stringMap[key] !== wordFrequencyMap[key]) {return false}
        }
        return true
    }
}

console.log(find_word_concatenation('catfoxcat', ['cat', 'fox']));
console.log(find_word_concatenation('catcatfoxfox', ['cat', 'fox']));
