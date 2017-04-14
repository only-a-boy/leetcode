/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
	if(n < 2 || n > 58){
		return false;
	}else if(n < 5){
		switch(n){
			case 2:return 1;
			case 3:return 2;
			case 4:return 4;
		}
	}else{
		var t = 1;
		while(n > 4){
			n -= 3;
			t *= 3;
		}
		t *= n;
		return t;
	}	    
};

console.log(integerBreak(14));