// https://leetcode.com/problems/climbing-stairs/description/

// 3 SOLUTIONs in this file:
// 1. DP List
// 2. Kadane's Algorithm

// =============================================================================

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:
// 1 <= n <= 45

// =============================================================================
// Approach: Dynamic Programming.
// 1. Create an array dp of size n+1 to store the number of ways to reach each step.
// 2. Initialize dp[0] = 1 and dp[1] = 1, as there is one way to reach the first step.
// 3. Iterate from 2 to n, and for each step i, calculate the number of ways to reach it
//    by adding the number of ways to reach the previous two steps (dp[i-1] + dp[i-2]).
// 4. Return dp[n], which contains the number of ways to reach the top.
// =============================================================================
// Time complexity: O(n), 
// Space complexity: O(n).
// =============================================================================
// NOTE: We're just computing the n-th fibonacci number.
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    const track = Array(n + 1).fill(0);
    track[1] = 1;
    track[2] = 2

    for (let i = 3; i < track.length; i++)
        track[i] = track[i - 1] + track[i - 2]

    return track[n];
}

// Test cases
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(4)); // Output: 5
console.log(climbStairs(5)); // Output: 8
console.log(climbStairs(6)); // Output: 13
console.log(climbStairs(7)); // Output: 21
console.log(climbStairs(8)); // Output: 34
console.log(climbStairs(9)); // Output: 55

console.log("=============================================================================");


// Approach 2: Constant Space Complexity
// =============================================================================
// 1. Initialize two variables, prev1 and prev2, to store the number of ways to reach the previous two steps.
// 2. Set prev1 = 1 and prev2 = 2, as there is one way to reach the first step and two ways to reach the second step.
// 3. Iterate from 3 to n, and for each step i, calculate the number of ways to reach it
//    by adding the number of ways to reach the previous two steps (prev1 + prev2).
// 4. Update prev1 and prev2 for the next iteration.
// 5. Return prev2, which contains the number of ways to reach the top.
// =============================================================================
// Time complexity: O(n),
// Space complexity: O(1).
// =============================================================================
function climbStairs_2(n) {
    if (n === 1) return 1;
    let prev1 = 1, prev2 = 2;

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }

    return prev2;
}

// Test cases
console.log(climbStairs_2(2)); // Output: 2
console.log(climbStairs_2(3)); // Output: 3
console.log(climbStairs_2(4)); // Output: 5
console.log(climbStairs_2(5)); // Output: 8
console.log(climbStairs_2(6)); // Output: 13
console.log(climbStairs_2(7)); // Output: 21
console.log(climbStairs_2(8)); // Output: 34
console.log(climbStairs_2(9)); // Output: 55