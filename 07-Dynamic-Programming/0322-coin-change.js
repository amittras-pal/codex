// https://leetcode.com/problems/coin-change/description/

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Problem type: KNAPSACK

// Example 1:
// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Example 3:
// Input: coins = [1], amount = 0
// Output: 0

// Constraints:
// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

// =============================================================================
// Approach: Dynamic Programming
// 1. Create an array dp of size amount + 1, initialized with Infinity / (amount + 1).
// 2. Set dp[0] = 0, as 0 coins are needed to make amount 0.
// 3. Iterate through each coin in coins.
// 4. For each coin, iterate through the dp array from coin to amount.
// 5. Update dp[j] = Math.min(dp[j], dp[j - coin] + 1) to find the minimum number of coins needed to make amount j.
// 6. After processing all coins, check dp[amount].
// 7. If dp[amount] is still Infinity, return -1, indicating that it's not possible to make the amount.
// 8. Otherwise, return dp[amount], which contains the minimum number of coins needed to make the amount.
// =============================================================================
// Time Complexity: O(n * amount), where n is the number of coins.
// Space Complexity: O(amount), for the dp array.
// =============================================================================
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    const dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let i = 0; i <= amount; i++) {
        for (const coin of coins) {
            if ((i - coin) >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }
    return dp[amount] !== amount + 1 ? dp[amount] : -1
}

// Example Usage
console.log(coinChange([1, 2, 5], 11)); // Output: 3
console.log(coinChange([2], 3)); // Output: -1
console.log(coinChange([1], 0)); // Output: 0
