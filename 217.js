/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var A = new Set(nums);
    if(nums.length == A.size){
        return false;
    }else{
        return true;
    } 
};