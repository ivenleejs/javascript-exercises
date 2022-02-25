const fibonacci = function(nth) {
    // the fibonacci sequence is 1 1 2 3 5 8
    // c = a + b
    if (nth < 1) {
        return "OOPS";
    }
    a = 1;
    b = 1;
    for (let i = 1; i < nth; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
