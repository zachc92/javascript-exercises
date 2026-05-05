const sumAll = function(a, b) {
    if(a < 0 || b < 0 || 
    Number.isInteger(a) == false || Number.isInteger(b) == false){
        return 'ERROR';
    }
    if(a > b){
        let temp = a;
        a = b;
        b = temp;
    }
    let sum = 0;
    for(i = a; i <= b; i++){
        sum += i;
    }
    return sum;
};

sumAll(2.5,4)

// Do not edit below this line
module.exports = sumAll;