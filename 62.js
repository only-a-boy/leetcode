/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m == 0 || n == 0){
        return 0;
    }
    var a = [];
    for(var i = 0;i < m;i++){
        a[i] = [];
        for(var j = 0;j < n;j++){
            a[i][j] = 1;
        }
    }
        for(var i = 1;i < m;i++){
            a[i][0] = a[i - 1][0]
        }
        for(var j = 1;j < n;j++){
            a[0][j] = a[0][j - 1]
        }
        for(var i = 1;i < m;i++){
            for(var j = 1;j < n;j++){
                a[i][j] = a[i - 1][j] + a[i][j - 1]
            }
        }
    return a[m - 1][n - 1]
};