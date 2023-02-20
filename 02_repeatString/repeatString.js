const repeatString = function(string, numTimes) {
    let output = '';
    if(numTimes < 0){
        return "ERROR";
    }
    for(i=0;i<numTimes;i++){
        output = output.concat(string);
    }
    return output;
};

repeatString('testing', 3);

// Do not edit below this line
module.exports = repeatString;
