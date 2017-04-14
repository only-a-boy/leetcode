/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
   var A0 = a.split("+")[0];
   var A1 = a.split("+")[1].split("i")[0];
   var B0 = b.split("+")[0];
   var B1 = b.split("+")[1].split("i")[0];
   var C0 = A0 * B0 - A1 * B1;
   var C1 = A0 * B1 + A1 * B0;
   return `${C0}+${C1}i`;
};
console.log(complexNumberMultiply("1+1i","1+-1i"))