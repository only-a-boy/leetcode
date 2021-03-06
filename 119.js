/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) { 
    var number = [];
    for(var i = 0;i < rowIndex + 1;i++){
    number[i] = []; 
      for(var j = 0;j < i + 1;j++){
        number[i][j] = 1;
        if(i > 1 && j > 0 && j < i){
          number[i][j] = number[i - 1][j - 1] + number[i - 1][j]; 
        }
      }
  }
    return number[rowIndex];
};
