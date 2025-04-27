// https://leetcode.com/problems/counting-bits/description/

// =============================================================================
// Also can be considered as a dynamic programming problem.
// 2 Solutions:
// 1. Bit Manipulation. 📌
// 2. Dynamic Programming. 
// =============================================================================

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:
// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// Example 2:
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Constraints:
// 0 <= n <= 10^5

// Follow up:

// - It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// - Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

// =============================================================================
// Approach: Bit Manipulation.
// 1. The number of bits in the binary representation of a number can be calculated using the formula:
//    ans[i] = ans[i >> 1] + (i & 1)
// 2. The right shift operator (>>) divides the number by 2, and the bitwise AND operator (&) checks if the least significant bit is 1 or 0.
// =============================================================================
// Time Complexity: O(n)
// Space Complexity: O(n)
// =============================================================================
/** 
 * @param {number} n
 * @return {number[]}
 */
function countingBits(n) {
    // Initialize an array of size n + 1 with all elements set to 0
    const ans = new Array(n + 1).fill(0);

    // Loop through numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        // Calculate the number of 1's in the binary representation of i
        // ans[i >> 1] gives the count of 1's in i divided by 2 (right shift by 1)
        // (i & 1) checks if the least significant bit of i is 1
        ans[i] = ans[i >> 1] + (i & 1);
    }

    // Return the resulting array
    return ans;
}

// Test cases
console.log(countingBits(2)); // Output: [0, 1, 1]
console.log(countingBits(5)); // Output: [0, 1, 1, 2, 1, 2]
console.log(countingBits(0)); // Output: [0]
console.log(countingBits(1)); // Output: [0, 1]