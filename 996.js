/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
	var array = [];
	array.length = num;
	var a = 0;
    for(var i = 0;i <= num;i++){
    	var t = i;
    	var count = 0;
    	while(t){
    		a = t % 2;
    		t = parseInt(t / 2);
    		if(a == 1){
    			count++;
    		}
    	}
    	array[i] = count;
    }
    return array;
};

console.log(countBits(5));