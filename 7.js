/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var a = x.toString().replace(",")
    var b = "";
    for(var i = 0; i < a.length;i++){
        b = a[i] + b
    }
    if(parseInt(b,10) >= 2147483651){
        return 0;
    }
    if(x >= 0){
         return parseInt(b,10);
    }else{
        return -parseInt(b,10);
    }
};