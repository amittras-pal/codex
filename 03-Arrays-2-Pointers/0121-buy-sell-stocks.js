// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104


// =============================================================================
// Approach: 2-pointers
// 1. Initialize two pointers, left and right, to the start of the array.
// 2. Move the right pointer to the end of the array.
// 3. For each position of the right pointer, check if the price at the left pointer is less than the price at the right pointer.
// 4. If it is, calculate the profit by subtracting the price at the left pointer from the price at the right pointer.
// 5. If the profit is greater than the current maximum profit, update the maximum profit.
// 6. If the price at the left pointer is greater than or equal to the price at the right pointer, move the left pointer to the right.
// 7. Continue this process until the right pointer reaches the end of the array.
// 8. Return the maximum profit at the end of the loop.
// =============================================================================
// Time Complexity: O(n)
// Space Complexity: O(1)
// =============================================================================
function maxProfit(prices) {
    if(prices?.length < 2) return 0;

    let maxProfit = 0;
    let left = 0, right = 1;
    
    while(right !== prices.length) {
        console.log({left, right, maxProfit});
        
        if(prices[left] < prices[right]) {
            const local = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, local);
        } else left = right;
        
        right++;
    }

    return maxProfit;
}


// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices1)); // Output: 5
console.log(maxProfit(prices2)); // Output: 2