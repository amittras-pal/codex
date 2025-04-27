// https://leetcode.com/problems/maximum-subarray/description/

// 3 SOLUTIONs in this file:
// 1. DP List
// 2. Kadane's Algorithm
// 3. Divide and Conquer (recursive)

// =============================================================================

// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:
// 1 <= nums.length <= 10^5
// -10^4 <= nums[i] <= 10^4

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// =============================================================================
// Approach 1: DP List
// 1. Create a list dp of the same length as nums to store the maximum subarray sum ending at each index.
// 2. Initialize dp[0] to nums[0].
// 3. Iterate through the nums array from index 1 to n-1.
// 4. For each index i, calculate dp[i] as the maximum of nums[i] and dp[i-1] + nums[i].
// 5. The maximum subarray sum will be the maximum value in the dp list.
// 6. Return the maximum value from the dp list.
// =============================================================================
// Time Complexity: O(n)
// Space Complexity: O(n)
// =============================================================================
/**
 * 
 * @param {number[]} nums 
 */
function maxSubArray_DP(nums) {
    const dp = Array(nums.length).fill(0);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++)
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);

    return Math.max(...dp);
}

// Test cases
console.log(maxSubArray_DP([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray_DP([1])); // Output: 1
console.log(maxSubArray_DP([5, 4, -1, 7, 8])); // Output: 23

console.log("=========================================");

// =============================================================================
// Approach 2: Kadane's Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
// =============================================================================
// 1. Initialize two variables, maxSum and currentSum, to the first element of the array.
// 2. Iterate through the array starting from the second element.
// 3. For each element, update currentSum to be the maximum of the current element and the sum of currentSum and the current element.
// 4. Update maxSum to be the maximum of maxSum and currentSum.
// 5. Return maxSum.
// =============================================================================
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray_Kadane(nums) {
    let max = nums[0];
    let current = 0;
    for(const num of nums) {
        if(current < 0) 
            current = 0;
        current += num;
        max = Math.max(max, current);
    }

    return max;
}
// Test cases
console.log(maxSubArray_Kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray_Kadane([1])); // Output: 1
console.log(maxSubArray_Kadane([5, 4, -1, 7, 8])); // Output: 23

console.log("=========================================");

// Approach 3: Divide and Conquer
// 1. If the array is empty, return 0.
// 2. If the array has only one element, return that element.
// 3. Find the middle index of the array.
// 4. Recursively find the maximum subarray sum in the left half of the array.
// 5. Recursively find the maximum subarray sum in the right half of the array.
// 6. Find the maximum subarray sum that crosses the middle index.
// 7. Return the maximum of the three values obtained in steps 4, 5, and 6.
// 8. The maximum subarray sum that crosses the middle index is calculated by iterating from the middle index to the left and right,
//    keeping track of the maximum sum on both sides.
// 9. The final result is the maximum of the left, right, and crossing sums.
// =============================================================================
// Time Complexity: O(n log n)
// Space Complexity: O(log n)
// =============================================================================
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray_DivideAndConquer(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    const mid = Math.floor(nums.length / 2);
    const leftMax = maxSubArray_DivideAndConquer(nums.slice(0, mid));
    const rightMax = maxSubArray_DivideAndConquer(nums.slice(mid));

    let leftCrossMax = Number.NEGATIVE_INFINITY;
    let rightCrossMax = Number.NEGATIVE_INFINITY;
    let sum = 0;

    for (let i = mid - 1; i >= 0; i--) {
        sum += nums[i];
        leftCrossMax = Math.max(leftCrossMax, sum);
    }

    sum = 0;
    for (let i = mid; i < nums.length; i++) {
        sum += nums[i];
        rightCrossMax = Math.max(rightCrossMax, sum);
    }

    return Math.max(leftMax, rightMax, leftCrossMax + rightCrossMax);
}
// Test cases
console.log(maxSubArray_DivideAndConquer([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray_DivideAndConquer([1])); // Output: 1
console.log(maxSubArray_DivideAndConquer([5, 4, -1, 7, 8])); // Output: 23

