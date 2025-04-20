// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1: 
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

// Note: The input array is modified in place. If you need to keep the original array, make a copy of it before passing it to the function.
// Approach 1: Using Set
// 1. Create a set to store the numbers in the array.
// 2. Iterate through the numbers from 1 to n.
// 3. Add the missing numbers to the result array if they are not in the set.
// Time complexity: O(n)
// Space complexity: O(n) for the set
function findAllMissingNumbers(arr) {
    const set = new Set(arr);
    const n = arr.length;    
    const missing = [];
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) missing.push(i);
    }
    return missing;
}

// Example usage:
const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
const nums2 = [1, 1];

console.log(findAllMissingNumbers(nums1)); // Output: [5, 6]
console.log(findAllMissingNumbers(nums2)); // Output: [2]

// Approach 2: Using Sorting
// 1. Iterate through the array and mark the numbers as negative by using their absolute value.
// 2. Iterate through the array again and check if the number is positive.
// 3. If it is positive, add the index + 1 to the result array.
// Time complexity: O(n)
// Space complexity: O(1) since we are modifying the input array
function findAllMissingNumbersConstantSpace(arr) {
    const n = arr.length;
    const missing = [];
    
    for (let i = 0; i < n; i++) {
        const index = Math.abs(arr[i]) - 1;
        arr[index] = -Math.abs(arr[index]);
    }
    
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) missing.push(i + 1);
    }
    
    return missing;
}
// Example usage:
const nums3 = [4, 3, 2, 7, 8, 2, 3, 1];
const nums4 = [1, 1];
console.log(findAllMissingNumbersConstantSpace(nums3)); // Output: [5, 6]
console.log(findAllMissingNumbersConstantSpace(nums4)); // Output: [2]