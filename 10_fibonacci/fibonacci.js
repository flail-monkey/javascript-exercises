const fibonacci = function(fib_index) {
    if (typeof fib_index === "string")
        {fib_index = parseInt(fib_index)}
    if (fib_index < 0)
        return "OOPS"
    // initial sequence: 0, 1, 1, 2, 3, 5, 8, etc.
    // index             0  1  2  3  4  5  6
    if (fib_index === 0)
        {return 0}
    if (fib_index === 1)
        {return 1}
    if (fib_index > 1)
        {
        prev1 = 0
        prev2 = 1
        for (i=2; i<fib_index+1; i++)
            {
            total = prev1 + prev2
            prev1 = prev2
            prev2 = total
            }
        return total
        }
};
fibonacci(2)
// Do not edit below this line
module.exports = fibonacci;
