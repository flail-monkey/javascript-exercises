const add = function(a, b) {
  return a+b
};

const subtract = function(a, b) {
  return a-b
};

const sum = function(add_me) {
  return add_me.reduce((total, toAdd) => total + toAdd, 0)
};

const multiply = function(multiply_me) {
  return multiply_me.reduce((total, toMultiply) => total * toMultiply, 1)
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(integer) {
	// if (integer === 0)
  //   {return 1}
  // if (integer > 0)
  //   {
  //   total = 1
  //   for (let i = integer; i > 0; i--)
  //     {
  //       total *=i
  //     }
  //   return total
  //   }
  let product = 1;
  for (let i = integer; i > 0; i--)
      {
      product *= i;
      }
  return product;
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
