/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || x >= 2147483647){
    	return false;
    }
    if( x == 0){
    	return true;
    }
    var a = 1;
    while(parseInt(x / a) >= 10){
    	a *= 10
    }
    while(x != 0){
    	var left = parseInt(x / a)
    	var right = x % 10
    	if(left != right){
    		return false
    	}
    	x = parseInt((x % a) / 10)
    	a /= 100;   	
    }
    return true;
};