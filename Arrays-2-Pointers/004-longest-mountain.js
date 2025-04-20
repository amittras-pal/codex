// https://leetcode.com/problems/longest-mountain-in-array/description/
// You may recall that an array arr is a mountain array if and only if:
// arr.length >= 3

// There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

// Example 1:
// Input: arr = [2,1,4,7,3,2,5]
// Output: 5
// Explanation: The largest mountain is [1,4,7,3,2] which has length 5.

// Example 2:
// Input: arr = [2,2,2]
// Output: 0
// Explanation: There is no mountain.


// Constraints:
// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104


// Follow up:
// - Can you solve it using only one pass?
// - Can you solve it in O(1) space?

// =============================================================================
// Approach:
// 1. Initialize a variable maxLength to 0.
// 2. Iterate through the array from index 1 to arr.length - 2.
// 3. For each index i, check if arr[i] is a peak (i.e., arr[i - 1] < arr[i] > arr[i + 1]).
// 4. If it is a peak, initialize two pointers left and right to i.
// 5. Expand the left pointer while arr[left] < arr[left - 1].
// 6. Expand the right pointer while arr[right] < arr[right + 1].
// 7. Calculate the length of the mountain as right - left + 1.
// 8. Update maxLength if the current mountain length is greater than maxLength.
// 9. Return maxLength at the end of the loop.
// =============================================================================
// Time Complexity: O(n)
// Space Complexity: O(1)
// =============================================================================
/**
 * 
 * @param {number[]} arr 
 */
function longestMountain(arr) {
    if (arr.length < 3) return 0; // Technically no need to check since the question specifies that it will be at least 3 elements in every case.

    let mntLength = 0;
    // Only loop from 2nd to the 2nd to last element, bcz peaks can't be at the edges. 
    for (let i = 1; i < arr.length - 1; i++) {
        // If a peak is found, 
        if ((arr[i - 1] < arr[i]) && (arr[i] > arr[i + 1])) {
            // expand the mountain both sides using 2 pointers.
            let left = i, right = i;
            while (left >= 0 && arr[left] > arr[left - 1]) {
                left--;
            }
            while (right <= arr.length - 1 && arr[right] > arr[right + 1]) {
                right++;
            }

            mntLength = Math.max(mntLength, right - left + 1);
        }

    }

    return mntLength;
}

// =============================================================================
// Example usage:
console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); 
// Output: 5, [1,4,7,3,2], subarray of length 5.
console.log(longestMountain([2, 2, 2])); 
// Output: 0, all flat.
console.log(longestMountain([1, 2, 3, 4, 5])); 
// Output: 0, all increasing, peak can't be at edge.
console.log(longestMountain([5, 4, 3, 2, 1])); 
// Output: 0, all decreasing, peak can't be at edge.
console.log(longestMountain([1, 2, 3, 4, 5, 4, 3, 2, 1])); 
// Output: 9, full mountain.

// =============================================================================
// Complex test case:
// A large array with multiple mountains of varying lengths, including edge cases.
const complex = [
    2, 1, 4, 7, 3, 2, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 4, 3, 2, 1
];

console.log(longestMountain(complex));
// Output: 21