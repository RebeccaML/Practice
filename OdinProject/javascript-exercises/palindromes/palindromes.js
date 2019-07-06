const palindromes = function(string) {
    let reversed = string.split("").reverse().join("").replace(/[^\w]/g,"");
    string = string.replace(/[^\w]/g,"");
    return string.toLowerCase() === reversed.toLowerCase();
}

module.exports = palindromes
