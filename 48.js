/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var a = [];
    for(var i = 0;i < matrix.length;i++){
      a[i] = [];
      for(var j = 0;j < matrix.length;j++){
        a[i][j] = 0;
        a[i][j] = matrix[matrix.length - j - 1][i]
      }
    }
    for(var i = 0;i < matrix.length;i++){
        for(var j = 0;j < matrix.length;j++){
          matrix[i][j] = a[i][j]
        }
    }
};