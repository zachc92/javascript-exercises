const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num1) {
	let output = 0;
  if(typeof(num1) == 'object'){
    for(i=0;i<num1.length;i++){
      output += num1[i];
    }
    return output;
  }
};

const multiply = function(num1) {
  let output = 1;
  for(i=0;i<num1.length;i++){
    output *= num1[i];
  }
  return output;
};

const power = function(num1,num2) {
  let output = num1;
  for(i=1;i<num2;i++){
    output *= num1;
  }
  return output;
};

const factorial = function(num1) {
	let output = 1;
  for(i=1;i<=num1;i++){
    output *= i;
  }
  return output;
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
