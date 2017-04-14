/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var t = Math.floor(Math.log2(num)) + 1;
    return Math.pow(2,t) - num - 1;
};
console.log(findComplement(5))