 /**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if(grid.length == 0 || grid[0].length == 0){
    return 0;
  }
  var a = [];
    for(var i = 0;i < grid.length;i++){
      a[i] = [];
      for(var j = 0;j < grid[0].length;j++){
        a[i][j] = 0;
        a[0][0] = grid[0][0]
      }
    }
      for(var i = 1;i < grid.length;i++){
        a[i][0] = a[i - 1][0] + grid[i][0]
      }
      for(var j = 1;j < grid[0].length;j++){
        a[0][j] = a[0][j - 1] +grid[0][j]
      }
      for(var i = 1;i < grid.length;i++){
        for(var j = 1;j < grid[0].length;j++){
          a[i][j] = Math.min(a[i - 1][j],a[i][j - 1]) + grid[i][j]
        }
      }
    return a[grid.length - 1][grid[0].length - 1];   
};