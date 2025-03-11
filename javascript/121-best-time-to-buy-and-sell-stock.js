/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let buy = prices[0];

  for(let i = 1; i < prices.length; i++) {
      let maxSoFar = prices[i] - buy;

      if(maxSoFar < 0) {
          buy = prices[i]
      } else {
          maxProfit = Math.max(maxProfit, maxSoFar);
      }
  }

  return maxProfit;
};