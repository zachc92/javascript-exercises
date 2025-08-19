const reverseString = function(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.unshift(arr[i]);
    }
    let newStr = newArr.join("");
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
