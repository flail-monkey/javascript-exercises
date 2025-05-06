const palindromes = function (word) {
    lowerWord = word.toLowerCase()
    validWord = lowerWord.replace(/[^\w\d]/g,"")
    stringArray = validWord.split("")
    reversed = stringArray.reverse().join("")
    if (validWord === reversed)
        {
        return true
        }
    else {return false}
};

// Do not edit below this line
module.exports = palindromes;
