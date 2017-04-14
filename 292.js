/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
   n = n % 4;
   if(n == 0){
   	return false;
   }else{
   	return true;
   }
    
};