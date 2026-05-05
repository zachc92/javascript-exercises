const reverseString = function(string) {
    let newString = [];
    let array = string.split('');
    for(i = 0; i < array.length; i++){
        newString.unshift(array[i]);
    }
    return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;
