// https://leetcode.com/problems/3sum/description/
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// =============================================================================
// Approach: 
// 1. Sort the array
// 2. Use a for loop to iterate through the array
// 3. For each element, use two pointers to find the other two elements that sum to zero
// 4. If the sum is zero, add the triplet to the result array
// 5. If the sum is less than zero, move the left pointer to the right
// 6. If the sum is greater than zero, move the right pointer to the left
// 7. Skip duplicates by moving the left and right pointers to the next unique element
// 8. Return the result array
// =============================================================================
// Time Complexity: O(n^2) becase we are using a nested loop to find the triplets.
// Space Complexity: O(1) for the result array, O(n) for the input array.
// =============================================================================
/**
 * Implementation.
 * @param {number[]} arr 
 */
function threeSum(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const result = []
    for (let i = 0; i < sorted.length; i++) {
        // Additional Optimization 1.
        if (i > 0 && sorted[i] === sorted[i - 1]) continue; // Skip duplicates at successive indices.
        // Additional Optimization 2.
        if (sorted[i] > 0) break; // Since the array is sorted, no need to check further as there are no possible triplets.

        let left = i + 1, right = sorted.length - 1;
        while (left < right) {
            const currentSum = sorted[i] + sorted[left] + sorted[right];
            if (currentSum > 0) right--;
            else if (currentSum < 0) left++;
            else {
                result.push([sorted[i], sorted[left], sorted[right]]);
                left++;
                while (left < right && (sorted[left] === sorted[left - 1]))
                    left++;
            }
        }
    }
    return result;
}

// Example 1
const arr1 = [-1, 0, 1, 2, -1, -4];
const result1 = threeSum(arr1);
console.log(result1); // Output: [[-1,-1,2],[-1,0,1]]
// Example 2
const arr2 = [0, 1, 1];
const result2 = threeSum(arr2);
console.log(result2); // Output: []
// Example 3
const arr3 = [0, 0, 0];
const result3 = threeSum(arr3);
console.log(result3); // Output: [[0,0,0]]
// Example 4
const arr4 = [-2, 0, 1, 1, 2];
const result4 = threeSum(arr4);
console.log(result4); // Output: [[-2,0,2],[-2,1,1]]