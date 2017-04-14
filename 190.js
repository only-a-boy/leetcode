 /**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var t = n.toString(2);
    for(var i = 0;i < 32 - n.toString(2).length;i++){
        t = "0" + t
    }
    var T = "";
    for(var i = 0; i < 32;i++){
        T = t[i] + T
    }
    return parseInt(T,2)
};