// Given an array of integers nums, for each nums[i] find out how many numbers in the array are smaller than it. 
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array 

// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

// Example 1:
// Input: [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// - For nums[0]= 8, there exist four smaller numbers than it (1, 2, 2 and 3).
// - For nums[1]= 1 does not exist any smaller number than 1. For nums[2]= 2 there exist one smaller number than it (1).
// - For nums[3]= 2 there exist one smaller number than it (1).
// - For nums[4]= 3 there exist three smaller numbers than it (1, 2 and 2).

// Example 2:
// Input: [6,5,4,8]
// Output: [2,1,0,3]

// Example 3:
// Input: [7,7,7,7]
// Output: [3,2,0,0]


// Approach:
// 1. Create a copy of the original array and sort it.
// 2. Create a hash map to store the indices of the elements.
// 3. Iterate through the sorted array and store the index of each element in the hash map.
// 4. Iterate through the original array and for each element, find its index in the sorted array.
// 5. The index in the sorted array will give the count of smaller elements.
// 6. Return the counts in an array.
// Time Complexity: O(n log n)
// Space Complexity: O(n)
function smallerNumbersThanCurrent_O_nLogn(nums = []) {
    const sorted = [...nums].sort((a, b) => a - b); // Complexity: O(n log n)
    const indexMap = new Map();
    for (const [index, num] of sorted.entries()) {
        if (!indexMap.has(num)) {
            indexMap.set(num, index);
        }
    }
    return nums.map(num => indexMap.get(num));
}

// Example Usage:
console.log(smallerNumbersThanCurrent_O_nLogn([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent_O_nLogn([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent_O_nLogn([7, 7, 7, 7]));
// Output: [4, 0, 1, 1, 3]
// Output: [2, 1, 0, 3]
// Output: [3, 2, 0, 0]


// Approach 2:
// 1. Create a frequency array to count the occurrences of each number.
// 2. Create a prefix sum array to store the count of smaller elements.
// 3. Iterate through the frequency array and update the prefix sum array.
// 4. Create the result array by looking up the prefix sum for each element in the original array.
// 5. Return the result array.
// Time Complexity: O(n) ⚠️
// Space Complexity: O(n)
function smallerNumbersThanCurrent_O_n(nums = []) {
    const freq = new Array(102).fill(0); // 102 to account for 0 to 100
    const result = new Array(nums.length).fill(0);

    // Count the frequency of each number
    for (const num of nums) {
        freq[num]++;
    }
    // Create the prefix sum array
    for (let i = 1; i < freq.length; i++) {
        freq[i] += freq[i - 1];
    }
    // Create the result array
    for (let i = 0; i < nums.length; i++) {
        result[i] = nums[i] === 0 ? 0 : freq[nums[i] - 1];
    }
    return result;
}

// Example Usage:
console.log(smallerNumbersThanCurrent_O_n([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent_O_n([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent_O_n([7, 7, 7, 7]));