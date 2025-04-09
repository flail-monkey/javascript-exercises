const sumAll = function(start, end) {
    // no negative numbers
    if (start < 0 || end < 0)
        {return "ERROR"}
    // must be an integer
    if (!(Number.isInteger(start)) || !(Number.isInteger(end)))
        {return "ERROR"}
    // reorder if first number is bigger
    if (start > end)
        {
        e = start
        s = end
        }
    else
        {
        s = start
        e = end
        }

    let total = 0
    for (let i = s; i <= e; i++)
        {total += i}
    return total
};

// Do not edit below this line
module.exports = sumAll;
