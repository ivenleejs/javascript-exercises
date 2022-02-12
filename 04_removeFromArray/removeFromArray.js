const removeFromArray = function(array, item, ...items) {
    for (i = 1; i < arguments.length; i++){
        if (array.indexOf(arguments[i]) != -1) {
            let index = array.indexOf(arguments[i]);
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
