/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
	var A = new Array(findNums.length).fill(-1);
    for(var i=0;i<findNums.length;i++){
    	for(var j=0;j<nums.length-1;j++){
    		if(findNums[i] == nums[j]){
    			for(var k=j+1;k<nums.length;k++){
    				if(nums[j] < nums[k]){
	    				A[i] = nums[k];
	    				break;
	    			}
    			}			
    			
    		}
    	}
    }
    return A;
};
console.log(nextGreaterElement([2,4],[1,2,3,4]))