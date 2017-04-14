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
var deleteDuplicates = function(head) {
    if(head === null || head.next === null){
        return head;
    }          
    var prev = head;    
    var p = head.next;
    while(p !== null){
        if(p.val == prev.val){
            prev.next = p.next;
            p = p.next;
        }else{
            prev = p;
            p = p.next; 
        }
    }
    return head;
};
console.log(deleteDuplicates([1]))