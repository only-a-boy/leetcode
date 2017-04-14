/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var sum =0;
    while(n){
        var s = n%10
        n = parseInt(n / 10)
        sum += Math.pow(s,2)
    }if(sum != 1){
        if(sum == 4){
            return false;
        }
        return isHappy(sum)
    }
    return true;
}