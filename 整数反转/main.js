/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {


    let compare = true;
    if (x < 0) {
        compare = false;
        x = 0 - x;
    }

    let fn = (x) => (x + "").split("").reverse().join("");

    let result = compare ? Number(fn(x)) : Number("-" + fn(x));

    if (result > Math.pow(2, 31) - 1 || result < 0 - (Math.pow(2, 31) - 1)) return 0
    return result

};