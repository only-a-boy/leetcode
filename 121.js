/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 0){
        return 0;
    }
    var maxPrice = prices[prices.length - 1]
    var result = 0;
    for(var i = prices.length - 1;i >= 0;i--){
        maxPrice = Math.max(maxPrice,prices[i]);
        result = Math.max(result,maxPrice - prices[i]);
    }
    return result;
};