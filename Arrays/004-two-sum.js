// https://leetcode.com/problems/two-sum/description/
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You may not use the same element twice. You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints: 
// 2 <= nums.length <= 10^4
// -10e9 <= nums[i] <= 10e9
// -10e9 <= target <= 10e9


// Approach:
// 1. Create a hash map to store the indices of the elements.
// 2. Iterate through the array.
// 3. For each element, calculate the complement (target - current element).
// 4. Check if the complement exists in the hash map.
// 5. If it exists, return the indices of the current element and the complement.
// 6. If it doesn't exist, add the current element and its index to the hash map.
// 7. If no solution is found, return an empty array.
// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSum(nums = [], target = 0) {
    const indexMap = new Map();
    for (const [index, num] of nums.entries()) {
        const complement = target - num;
        if (indexMap.has(complement)) {
            return [indexMap.get(complement), index];
        }
        indexMap.set(num, index);
    }
    return [];
}

// Example Usage
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
