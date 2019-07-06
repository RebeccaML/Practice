const caesar = function (string, steps) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (string.match(/[A-Z]/ig)) {
            let code = string.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                result += String.fromCharCode((((code + steps - 65) % 26 + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                result += String.fromCharCode((((code + steps - 97) % 26 + 26) % 26) + 97);
            } else {
                result += string[i];
            }
        }
    }
    return result;

}

module.exports = caesar