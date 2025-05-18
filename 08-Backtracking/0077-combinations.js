// https://leetcode.com/problems/combinations/description/
/**
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 * You may return the answer in any order.
 * 
 * Example 1:
 * Input: n = 4, k = 2
 * Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * Explanation: There are 4 choose 2 = 6 total combinations.
 * Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
 * 
 * Example 2:
 * Input: n = 1, k = 1
 * Output: [[1]]
 * Explanation: There is 1 choose 1 = 1 total combination.
 * 
 * Constraints:
 * 1 <= n <= 20
 * 1 <= k <= n
 */

// =============================================================================
// Approach: Backtracking
// =============================================================================
// 1. Create a helper function that takes the current combination, the start index, and the remaining count.
// 2. If the remaining count is 0, add the current combination to the result.
// 3. Iterate from the start index to n, and for each number, add it to the current combination.
// 4. Recursively call the helper function with the next number and the remaining count - 1.
// 5. Backtrack by removing the last number from the current combination.
// 6. Return the result.
// =============================================================================
// Time Complexity: O(n!/(k!(n-k)!)) = O(n^k)
// Space Complexity: O(k) for the recursion stack and the current combination
// =============================================================================
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {

}

// Test cases
console.log(combine(4, 2)); // [[2,4],[3,4],[2,3],[1,2],[1,3],[1,4]]
console.log(combine(1, 1)); // [[1]]
console.log(combine(5, 3)); // [[3,4,5],[2,4,5],[2,3,5],[1,4,5],[1,3,5],[1,2,5],[1,2,3]]