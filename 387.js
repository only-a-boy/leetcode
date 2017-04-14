/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	if(s.length == 0){
		return -1;
	}
	if(s.length == 1){
		return 0;
	}
	
 	for(var i = 0;i < s.length;i++){
		for(var j = 0;j < s.length;j++){
			if(j == i)
			j++;
			if(s[i] == s[j])
				break;
			if( j >= s.length -1 && s[i] !== s[j]){
				return i;
			}
		}
	}
	return -1;		
};

console.log(firstUniqChar("aaaabbc"));