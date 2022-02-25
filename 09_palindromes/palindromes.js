const palindromes = function (word) {
    const lowered = word.replace(/[^\w]|_/g, "").toLowerCase();
    const reversed = lowered.split("").reverse().join("");
    if (lowered === reversed) {
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
