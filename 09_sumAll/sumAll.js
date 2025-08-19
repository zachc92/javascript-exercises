const sumAll = function(a, b) {
    let total = 0;
    if(a.toString().includes('.') == true || b.toString().includes('.') == true){
        return "ERROR";
    }
    if(a < 0 || b < 0){
        return "ERROR";
    }
    if(typeof a != 'number' || typeof b != 'number'){
        return "ERROR";
    }
    if(a < b){
        for(let i = a; i <= b; i++){
            total += i;
        }
        return total;
    } else if (a > b) {
        for(let i = b; i <= a; i++){
                total += i;
        }
        return total;
    } else if (a == b){
        total = total + a;
        return total;
    }
     
    
};

// Do not edit below this line
module.exports = sumAll;
