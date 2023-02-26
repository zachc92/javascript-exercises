const fibonacci = function(num) {
    let output = 0;
    let operator = 1;
    let holder = 1;
    if(Number(num) == 1 || Number(num) == 2){
        return 1;
    } else if(Number(num) < 0) {
        return "OOPS";
    }
    for(i=1;i<Number(num)-1;i++){
        output = operator + holder;
        holder = operator;
        operator = output;
    }
    return output;
};

// Do not edit below this line
module.exports = fibonacci;
