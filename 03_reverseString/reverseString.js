const reverseString = function(string) {
    let stringHolder = string.split("");
    let stringOutput = [];
    let stringCount = stringHolder.length;
    for(i=stringCount; i>=0; i--){
        stringOutput.push(stringHolder[i]);
    }
    return stringOutput.join('');
};

reverseString('hello there');

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
