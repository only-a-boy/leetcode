var addBinary = function(a, b) {        
    var flag = 0; 
    var n = 0;   
    var len = Math.abs(a.length-b.length);  
    if(a.length > b.length){
        while(n < len){
            b = "0" + b;
            n ++;
        }
    }
    else{
        while(n < len){
        a = "0" + a;
        n++;
        }
    }
    var c = ""; 
    for(var j = a.length - 1;j >= 0; j--){  
        var current = (parseInt(a[j])) ^ (parseInt(b[j])) ^ flag;  
        if(parseInt(a[j]) + (parseInt(b[j])) + flag > 1){  
            flag = 1;
        }  
        else{   
            flag = 0;
        }
        c = current.toString() + c;
    }  
    if(flag == 1){  
        c = "1" + c;
    } 

    return c;    
}