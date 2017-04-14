/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
	if(s !== "" && t === ""){
		return false;
	}
	if(s === ""){
		return true;
	}
	var c = 0;
   	var C = ""
    for(var i = 0;i < s.length;i++){
    	C = s.charAt(i);
    	while(c < t.length && t.charAt(c) != C){
    			c++;
    		}
    		if(c >= t.length){
    			return false;
    		}
    		c++;
    	}
    return true;
};

console.log(isSubsequence("leeeetcode","rfsfsfsfsfsfs"));