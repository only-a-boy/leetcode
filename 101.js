/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null){
      return true;
    }
    if(root.left == null && root.right == null){
      return true
    }
  return isMirror(root.left,root.right)   
}
var isMirror = function(a,b){
  if(a == null && b == null){
    return true;
  }
  if(a == null && b != null){
    return false;
  }
  if(a != null && b == null){
    return false;
  }
  if(a.val != b.val){
    return false;
  }
  return isMirror(a.left,b.right) && isMirror(a.right,b.left)
}