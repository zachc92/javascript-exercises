const repeatString = function(string, num) {
    if(num < 0){
        return 'ERROR';
    };
    let output = [];
    for(i=0;i < num; i++){
        output.push(string);
    }
    return output.join('');
};

// Do not edit below this line
module.exports = repeatString;
