/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(head === null){
    return false;
  }
  var a = head
  var b = head.next
    while(a !== null && b !== null){
      if(a.next === null || b.next === null){
        return false;
      }
      if(b == a){
        return true;
      }
      a = a.next
      b = b.next.next
    }     
    return false;
};