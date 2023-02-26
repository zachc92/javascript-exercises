const getTheTitles = function(books) {
    let output = [];
    for(i=0;i<books.length;i++){
        output.push(books[i].title);
    }
    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
