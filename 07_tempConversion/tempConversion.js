const convertToCelsius = function(f) {
  c = (f-32) * (5/9)
  roundedC = parseFloat(c.toFixed(1))
  return roundedC
};

const convertToFahrenheit = function(c) {
  f = c * (9/5) + 32
  roundedF = parseFloat(f.toFixed(1))
  return roundedF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
