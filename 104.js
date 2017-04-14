/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	if(root === null){
		return Depth = 0;
	}
	var Depth = Math.max(maxDepth(root.left),maxDepth(root.right)) + 1    
	return Depth;
};