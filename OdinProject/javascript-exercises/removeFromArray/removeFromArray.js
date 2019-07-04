const removeFromArray = function(arr, ...args) {
    let toDelete = args;
    arr = arr.filter(item => !toDelete.includes(item));
    return arr
}

module.exports = removeFromArray
