const fibonacci = function(num) {
    let arr = [];
    if (num < 1) {
        return "OOPS";
    }
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            arr.push(1);
        }
        else if (i === 1) {
            arr.push(1);
        }
        else {
            arr.push(arr[i-2] + arr[i-1]);
        }
    }
    return arr[arr.length-1];
}

module.exports = fibonacci
