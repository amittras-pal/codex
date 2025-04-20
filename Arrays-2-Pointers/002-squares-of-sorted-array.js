// https://leetcode.com/problems/squares-of-a-sorted-array/description/
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// =============================================================================
// Approach: 
// 1. Initialize two pointers, left and right, at the start and end of the array respectively.
// 2. Create an empty result array to store the squares.
// 3. While left pointer is less than or equal to right pointer:
//    - Compare the absolute values of the elements at the left and right pointers.
//    - If the absolute value at the left pointer is greater than the absolute value at the right pointer:
//      - Square the element at the left pointer and add it to the result array.
//      - Move the left pointer to the right.
//    - Otherwise:
//      - Square the element at the right pointer and add it to the result array.
//      - Move the right pointer to the left.
// 4. Reverse the result array to get the squares in non-decreasing order.
// 5. Return the result array.
// =============================================================================
// Time Complexity: O(n)
// Space Complexity: O(n) for the result array
// =============================================================================
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function squaresOfSortedArray(nums) {
    const result = [];
    let left = 0, right = nums.length - 1;

    // Not using Array.unshift bcz adding to end is O(1) & adding to beginning is O(n).
    while(left <= right) {
        if(Math.abs(nums[left]) > nums[right]) {
            result.push(nums[left]**2);
            left++;
        } else {
            result.push(nums[right]**2);
            right--;
        }
    }

    return result.reverse();
}

// Example Usage: 
const nums = [-4, -1, 0, 3, 10];
console.log(squaresOfSortedArray(nums)); // Output: [0, 1, 9, 16, 100]
// Example Usage:
const nums2 = [-7, -3, 2, 3, 11];
console.log(squaresOfSortedArray(nums2)); // Output: [4, 9, 9, 49, 121]