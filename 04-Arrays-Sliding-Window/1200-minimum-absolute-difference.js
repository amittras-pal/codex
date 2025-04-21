// https://leetcode.com/problems/minimum-absolute-difference/description/
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Example 1:
// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// Example 2:
// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]

// Example 3:
// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]

// Constraints:
// 2 <= arr.length <= 105
// -106 <= arr[i] <= 106

// =============================================================================
// Approach: sliding window.
// 1. Sort the array.
// 2. Initialize a variable minDiff to Infinity.
// 3. Iterate through the sorted array and calculate the absolute difference between adjacent elements.
// 4. If the difference is less than minDiff, update minDiff.
// 5. If the difference is equal to minDiff, add the pair to the result list.
// 6. Return the result list.
// =============================================================================
// Time Complexity: O(n log n) for sorting + O(n) for iterating through the array.
// Space Complexity: O(n) for storing the result list.
// =============================================================================
// Implementation
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
function minAbsDiff(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    let minDiff = Infinity;

    for (let i = 1; i < sorted.length; i++) {
        minDiff = Math.min(minDiff, sorted[i] - sorted[i - 1]);
    }

    const result = []
    for (let i = 1; i < sorted.length; i++) {
        if ((sorted[i] - sorted[i - 1]) === minDiff) 
            result.push([sorted[i - 1], sorted[i]]);
    }

    return result;
}

// Example Usage:
const arr1 = [4, 2, 1, 3];
console.log(minAbsDiff(arr1)); // Output: [[1, 2], [2, 3], [3, 4]]
const arr2 = [1, 3, 6, 10, 15];
console.log(minAbsDiff(arr2)); // Output: [[1, 3]]
const arr3 = [3, 8, -10, 23, 19, -4, -14, 27];
console.log(minAbsDiff(arr3)); // Output: [[-14, -10], [19, 23], [23, 27]]