class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        maxProfit = 0
        buy = prices[0]

        for price in prices:
            if price < buy:
                buy = price
            else:
                maxSoFar = price - buy
                maxProfit = max(maxProfit, maxSoFar)


        return maxProfit