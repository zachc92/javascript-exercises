const removeFromArray = function(array, arg) {
    for(argCounter=1;argCounter<arguments.length;argCounter++){
        for(i=0;i<array.length;i++){
            if(arguments[argCounter] === array[i]){
                array.splice(i,1);
            }
        }
    }
    return array;
};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
