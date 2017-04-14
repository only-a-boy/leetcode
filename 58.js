/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var t = s.split(" ")
    if(t[t.length-1] != ""){
        return t[t.length-1].length;
    }else{
       return 0; 
    }   
};
console.log(lengthOfLastWord("hello   "))