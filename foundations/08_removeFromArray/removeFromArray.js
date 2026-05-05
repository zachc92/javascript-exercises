const removeFromArray = function(arr, ...nums) {
    let newArr = [];
    newArr = arr.filter(item => !nums.includes(item));
    // this works in the following steps
    // 1. .filter begins looping through arr
    // 2. The filter function checks to see if nums includes arr[0]
    // 3. If it does, includes returns true and the '!' flips it to false
    // 4. If the check is false, the filter removes it so that it is not added to newArr
    // 5. If the check is true (after the '!' flips false to true), the filter keeps the value and 
    // adds it to newArr
    return newArr;
};

// removeFromArray([1,2,3,4],3);

// Do not edit below this line
module.exports = removeFromArray;
