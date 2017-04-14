/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var A = x.toString(2);
    var B = y.toString(2);
    var differ = A.length - B.length;
    var count = 0;
    if(differ >= 0){
    	for(var i=0;i<differ;i++){
    		if(A[i] == 1){
    			count++;
    		}
    	}
    	for(var i=differ;i<A.length;i++){
    		if(A[i] != B[i - differ]){
    			count++;
    		}
    	}
    }else{
    	for(var i=0;i<(-differ);i++){
    		if(B[i] == 1){
    			count++;
    		}
    	}
    	for(var i=(-differ);i<B.length;i++){
    		if(B[i] != A[i + differ]){
    			count++;
    		}
    	}
    }
    return count;
};
console.log(hammingDistance(9,2))