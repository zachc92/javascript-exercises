const palindromes = function (word) {
    let splitWord = word.toLowerCase();
    splitWord = splitWord.split('');
    let palindromeTest = [];
    let palindrome = [];
    for(i=0;i<splitWord.length;i++){
        if(splitWord[i] == "!" || splitWord[i] == "," || splitWord[i] == "." || splitWord[i] == " "){
            continue;
        }
        palindrome.unshift(splitWord[i]);
    }
    for(i=0;i<splitWord.length;i++){
        if(splitWord[i] == "!" || splitWord[i] == "," || splitWord[i] == "." || splitWord[i] == " "){
            continue;
        }
        palindromeTest.push(splitWord[i]);
    }
    console.log(palindrome.join(''));
    console.log(palindromeTest.join(''));
    if(palindrome.join('') == palindromeTest.join('')){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
