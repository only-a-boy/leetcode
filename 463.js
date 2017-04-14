/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
	var landCount = 0;
	var reduce = 0;
	var A = grid.length;
    var B = grid[0].length;
    for(var i = 0;i < A;i++){
    	for(var j = 0;j < B;j++){
    		if(grid[i][j] == 1){
    			landCount += 4;
    			if(A == 1 && B > 1){
    				if(i == 0 && j == 0){
						if(grid[0][1] == 1){
							reduce++;
						}
    				}
    				if(i == 0 && j == B - 1){
						if(grid[0][B-2] == 1){
							reduce++;
						}
					}
					if(i == 0 && j > 0 && j < B - 1){		
						if(grid[0][j-1] == 1){
							reduce++;
						}
						if(grid[0][j+1] == 1){
							reduce++;
						}				
					}	
    			}
    			if(A > 1 && B == 1){
    				if(i == 0 && j == 0){
						if(grid[1][0] == 1){
							reduce++;
						}
    				}
    				if(i == A - 1 && j == 0){
						if(grid[A-2][0] == 1){
							reduce++;
						}
					}
					if(j == 0 && i > 0 && i < A - 1){		
						if(grid[i-1][0] == 1){
							reduce++;
						}
						if(grid[i+1][0] == 1){
							reduce++;
						}				
					}	
    			}
    			if(A > 1 && B > 1){
    				if(i == 0 && j == 0){
						if(grid[0][1] == 1){
							reduce++;
						}
						if(grid[1][0] == 1){
							reduce++;
						}
					}
					if(i == 0 && j == B - 1){
						if(grid[1][B-1] == 1){
							reduce++;
						}
						if(grid[0][B-2] == 1){
							reduce++;
						}
					}
					if(i == A - 1 && j == 0){
						if(grid[A-2][0] == 1){
							reduce++;
						}
						if(grid[A-1][1] == 1){
							reduce++;
						}
					}
					if(i == A - 1 && j == B - 1){
						if(grid[A-2][B-1] == 1){
							reduce++;
						}
						if(grid[A-1][B-2] == 1){
							reduce++;
						}
					}
					if(i == 0 && j > 0 && j < B - 1){		
						if(grid[1][j] == 1){
							reduce++;
						}
						if(grid[0][j-1] == 1){
							reduce++;
						}
						if(grid[0][j+1] == 1){
							reduce++;
						}				
					}
					if(i == A - 1 && j > 0 && j < B - 1){
						if(grid[A-2][j] == 1){
							reduce++;
						}
						if(grid[A-1][j-1] == 1){
							reduce++;
						}
						if(grid[A-1][j+1] == 1){
							reduce++;
						}
					}
					if(j == 0 && i > 0 && i < A - 1){
						if(grid[i-1][0] == 1){
							reduce++;
						}
						if(grid[i+1][0] == 1){
							reduce++;
						}
						if(grid[i][1] == 1){
							reduce++;
						}
					}
					if(j == B - 1 && i > 0 && i < A - 1){
						if(grid[i-1][B-1] == 1){
							reduce++;
						}
						if(grid[i+1][B-1] == 1){
							reduce++;
						}
						if(grid[i][B-2] == 1){
							reduce++;
						}
					}
					if(i > 0 && i < A - 1 && j > 0 && j < B - 1){
						if(grid[i-1][j] == 1){
							reduce++;
						}
						if(grid[i+1][j] == 1){
							reduce++;
						}
						if(grid[i][j-1] == 1){
							reduce++;
						}
						if(grid[i][j+1] == 1){
							reduce++;
						}
					}
    			}
    			
    		}
		}
	}
	return landCount - reduce;
};
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))