// Given an unsorted array of distinct integers, return the missing number from the array. 

// Example:
// Input: [3, 0, 1]
// Output: 2

// Input: [0, 1]
// Output: 2

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8

// Optimal Approach: 
// 1. Calculate the expected sum of the first n numbers using the formula n*(n+1)/2.
// 2. Calculate the actual sum of the numbers in the array.
// 3. The missing number is the difference between the expected sum and the actual sum.
// Time Complexity: O(n)
// Space Complexity: O(1)
function findMissingNumber(arr) {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers, where n is the length of the array.
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 0, 1])); // Output: 2
console.log(findMissingNumber([0, 1])); // Output: 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8

// Sorting approach: NOT TAKEN
// 1. Sort the array.
// 2. Iterate through the sorted array and check for the missing number.
// 3. If the current number is not equal to the index, return the index as the missing number.
// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(1)
