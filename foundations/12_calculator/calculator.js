const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((item, current) => item + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((item, current) => item * current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if(a === 0){
    return 1;
  }
	let number = a
  for(i = a - 1; i > 0; i--){
    number = number*i;
  }
  return number;
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
