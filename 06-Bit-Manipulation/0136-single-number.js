// https://leetcode.com/problems/single-number/description/

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// ** You must implement a solution with a linear runtime complexity and use only constant extra space. 

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1
 
// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104

// Each element in the array appears twice except for one element which appears only once.

/** ============================================================================
 * Finds the single number in an array where every other number appears twice.
 * Utilizes the XOR operation to achieve linear runtime complexity and constant space.
 * 
 * XOR Operation Reference:
 * - https://en.wikipedia.org/wiki/Exclusive_or
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
 * =============================================================================
 */
// =============================================================================
// Approach: Bit Manipulation   
// 1. Initialize a variable `result` to 0.
// 2. Iterate through each number in the array `nums`.
// 3. For each number, perform a bitwise XOR operation with `result`.
// 4. The XOR operation will cancel out the numbers that appear twice, leaving only the single number.
// 5. Return the value of `result` as the single number.
// =============================================================================
// Time Complexity: O(n)
// Space Complexity: O(1)
// =============================================================================
// Implementation
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
}

// Example usage:
console.log(singleNumber([2, 2, 1]));
// Output: 1
console.log(singleNumber([4, 1, 2, 1, 2]));
// Output: 4
console.log(singleNumber([1]));
// Output: 1
// Example usage with negative numbers:
console.log(singleNumber([-1, -1, -2])); 
// Output: -2
console.log(singleNumber([-3, -3, -2, -2, -1])); 
// Output: -1
