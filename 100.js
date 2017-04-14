/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
	if(p === null && q === null){
		return true;
	}else{
		if(p === null || q === null){
			return false;
		}else{
			if((p.val == q.val)){
    			if(isSameTree(p.left,q.left) === true){
    				if(isSameTree(p.right,q.right) === true){
    				return true;
    				}else{
    					return false;
    				}
    			}else{
    				return false;
    			}
    		}else{
    			return false;
    		}
		}
	}  
}