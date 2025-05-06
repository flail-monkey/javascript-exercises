const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(add_me) {
  total = 0
  for (let i = 0; i < add_me.length; i++)
    {
    total += add_me[i]
    }
  return total
};

const multiply = function(multiply_me) {
  total = 1
  for (let i = 0; i < multiply_me.length; i++)
    {
    total *= multiply_me[i]
    }
  return total
};

const power = function(base, exponent) {
	return base**exponent
};

const factorial = function(integer) {
	if (integer === 0)
    {return 1}
  if (integer > 0)
    {
    total = 1
    for (let i = integer; i > 0; i--)
      {
        total *=i
      }
    return total
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
