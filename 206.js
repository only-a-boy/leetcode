/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null){
        return null;
    }
    if(head.next == null){
        return head;
    }
    var A = head.next
    var B = reverseList(A)
    head.next = null
    A.next = head
    return B;
};