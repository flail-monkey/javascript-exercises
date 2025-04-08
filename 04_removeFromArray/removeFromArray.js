const removeFromArray = function() {
    args = Array.from(arguments)
    targetArray = args[0]
    removeArgs = args.slice(1)

    let resultArray = []
    for (item of targetArray)
        {
        if (!(removeArgs.includes(item)))
            {resultArray.push(item)}
        }

    return resultArray
};

// Do not edit below this line
module.exports = removeFromArray;
