// https://leetcode.com/problems/counting-bits/description/

// =============================================================================
// Also can be considered as a dynamic programming problem.
// 2 Solutions:
// 1. Bit Manipulation.
// 2. Dynamic Programming. 📌
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
// Approach: Dynamic Programming.
// 1. The pattern of the number of 1's in binary representation can be observed.
//   For example, the number of 1's in binary representation of numbers from 0 to n follows a pattern for each 2^n:
//   0: 0 <-- 0
//   1: 1 <-- 1
//   2: 1 <-- 10        ⚠️
//   3: 2 <-- 11 
//   4: 1 <-- 100       ⚠️
//   5: 2 <-- 101
//   6: 2 <-- 110
//   7: 3 <-- 111
//   8: 1 <-- 1000      ⚠️  
//   9: 2 <-- 1001
//   10: 2 <-- 1010
//   11: 3 <-- 1011
//   12: 2 <-- 1100
//   13: 3 <-- 1101
//   14: 3 <-- 1110
//   15: 4 <-- 1111
//   16: 1 <-- 10000    ⚠️ 
// 2. The number of 1's in the binary representation of a number can be calculated using the formula:
//    ans[i] = ans[i - offset] + 1
// 3. The offset is the largest power of 2 less than or equal to i.
// 4. The offset is updated whenever it reaches a power of 2.
// =============================================================================
// Time Complexity: O(n)
// Space Complexity: O(n)
// =============================================================================
/**
 * 
 * @param {number} n 
 * @returns 
 */
function countingBits_DP(n) {
    const arr = Array(n).fill(0);
    let offset = 1;
    for (let i = 1; i <= n; i++) {
        if (offset * 2 === i)
            offset = i;

        arr[i] = 1 + arr[i - offset];
    }

    return arr;
}
// Test cases
console.log(countingBits_DP(2)); // Output: [0, 1, 1]
console.log(countingBits_DP(5)); // Output: [0, 1, 1, 2, 1, 2]
console.log(countingBits_DP(0)); // Output: [0]
console.log(countingBits_DP(1)); // Output: [0, 1]
console.log('==========================================================');