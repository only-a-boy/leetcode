/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var a = 1, b = 1;
    while (n--) {
        b += a;
        a = b - a;
    }
    return a;
};