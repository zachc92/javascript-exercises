const repeatString = function(str, a) {
    let i = 1;
    let newStr = "";
    if(a < 0){
        return "ERROR";
    }
    while(i <= a){
        newStr += str;
        i++;
    }
    return newStr;
};


// Do not edit below this line
module.exports = repeatString;
