 /**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var sum = 0
    var t = s.split("")
    var W = ["A", "B", "C", "D", "E", "F" , "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    for(var i = 0; i < t.length;i++){
        for(var j = 0;j < 26;j++){
            if(t[i] == W[j]){
                 sum += (Math.pow(26,t.length-1-i))*(j + 1)
            }
        }
    }
    return sum;
}