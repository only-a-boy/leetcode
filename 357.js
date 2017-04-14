/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
	var t = 10;
    if(n == 0){
   		t = 1;
    }
    if(n == 1){
    	t = 10;
    }
    for(var i = 2;i <= n;i++){
    	var fn = 9;
    	for(var j = 2;j <= i;j++){
    		fn *= 11 - j
    	}
    	t += fn;
    }
    return t;
};

console.log(countNumbersWithUniqueDigits(2));