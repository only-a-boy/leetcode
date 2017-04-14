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
var findBottomLeftValue = function(root) {
	var result;
	var maxDepth = 0;
	var findDepth = function(root,depth){
		if(root === null){
			return;
		}
		if(depth > maxDepth){
			result =root.val;
			maxDepth = depth;
		}

		findDepth(root.left,depth+1);
		findDepth(root.right,depth+1);
	};
	findDepth(root,1);
	return result;
};