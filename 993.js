/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var A = s.split(" ");
    var result = "";
    for( let value of A){
    	value = value.split("").reverse().join("") + " ";
    	result += value;
    }
   return result.substring(0,result.length - 1);
};

console.log(reverseWords("hello world shi gao pan"))