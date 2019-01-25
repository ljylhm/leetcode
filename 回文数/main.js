/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    if (x < 0) return false;

    let origin = x,
        _arr = [],
        result = 0,
        times = 0;

    while (x != 0) {
        ++times;
        _arr.unshift(x % 10);
        x = Math.floor(x / 10);
    }
    _arr.forEach((item, index) => {
        result = result + item * Math.pow(10, index)
    })

    return result == origin;

};