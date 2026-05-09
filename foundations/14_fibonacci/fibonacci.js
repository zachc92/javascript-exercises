const fibonacci = function(num) {
    if(num == 0){
        return 0;
    } else if (num < 0){
        return "OOPS"
    } else if (typeof(num) === "string") {
        num = Number(num);
    }
    let first = 0;
    let second = 1;
    let current = 0;
    for(i = 1; i < num; i++){
        current = first + second;
        first = second;
        second = current;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
