const palindromes = function (word) {
    lowerWord = word.toLowerCase()
    validWord = lowerWord.replace(/[^\w\d]/g,"")
    stringArray = validWord.split("")
    reversed = stringArray.reverse().join("")
    return validWord === reversed
};

// Do not edit below this line
module.exports = palindromes;
