/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return nums.concat(target).sort(function(a,b){
            return a-b}).findIndex((n) => n == target); 
};
console.log(searchInsert([1,2,3,4,5,10],2))