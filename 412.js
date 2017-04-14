/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	var array = [];
	array.length = n;
	for(var i = 1;i <= n;i++){
		array[i - 1] = i.toString();
		if(i % 3 == 0){
			array[i -1] = "Fizz";
		}
		if(i % 5 == 0){
			array[i - 1] = "Buzz";
		}
		if(i % 15 == 0){
			array[i - 1] = "FizzBuzz";
		}
	}
	return array;
    
};

console.log(fizzBuzz(20));