// https://leetcode.com/problems/minimum-size-subarray-sum/description/
// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 
// Constraints:
// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 
// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

// =============================================================================
// Approach: Sliding Window
// 1. Initialize two pointers, left and right, both starting at the beginning of the array.
// 2. Initialize a variable sum to keep track of the current sum of the subarray.
// 3. Initialize a variable minLength to store the minimum length of the subarray.
// 4. Iterate through the array with the right pointer.
// 5. Add the current element nums[right] to the sum.
// 6. While the sum is greater than or equal to target, update minLength with the minimum of minLength and (right - left + 1).
// 7. Subtract the element nums[left] from the sum and increment left.
// 8. Continue this process until the right pointer has traversed the entire array.
// 9. If minLength is still Infinity, return 0 (no such subarray found).
// 10. Otherwise, return minLength.
// =============================================================================
// Time Complexity: O(n)
// Space Complexity: O(1)
// =============================================================================
// Implementation
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minLengthSubarraySum(target, nums) {
    let total = 0, result = Infinity, _left = 0;
    for(let _right = 0; _right < nums.length; _right++) {
        total+=nums[_right];
        while(total >= target) {
            result = Math.min(result, _right - _left + 1);
            total -= nums[_left];
            _left++;
        }
    }

    return result !== Infinity ? result : 0;
}

// Example Usage:
// Output: 2
console.log(minLengthSubarraySum(7, [2, 3, 1, 2, 4, 3]));
// Output: 1
console.log(minLengthSubarraySum(4, [1, 4, 4]));
// Output: 0
console.log(minLengthSubarraySum(11, [1, 1, 1, 1, 1, 1, 1, 1]));
