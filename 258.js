/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var sum = num;
    while(sum >= 10){
        var t = sum
        sum = 0;
        while(t > 0){
            sum += t % 10;
            t = parseInt(t/10); 
        }
    }
    return sum;
};
