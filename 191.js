/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var t = n.toString(2);
    var a;
     if(t.match(/1/g) === null){
        return a = 0;
     }else{
        a = t.match(/1/g).length;
     }
     return  a;
};

