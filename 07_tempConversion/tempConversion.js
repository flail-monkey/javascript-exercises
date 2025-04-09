const convertToCelsius = function(f) {
  c = (f-32) * (5/9)
  roundedC = parseFloat(c.toFixed(1))
  return roundedC
};

const convertToFahrenheit = function(c) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
