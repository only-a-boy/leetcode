/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var t = nums.sort()
    if(t[0] != t[1]){
    	return t[0]
    }
    if(t[nums.length - 1] != t[nums.length - 2]){
    	return t[nums.length - 1]
    }
    for(var i = 1; i < nums.length - 1;i++){
    	if(t[i] != t[i + 1] && t[i] != t[i -1]){
    		return t[i]
    	}
    }    
};