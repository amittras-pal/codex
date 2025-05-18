// https://leetcode.com/problems/subsets/description/
/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [[],[0]]
 * 
 * Constraints:
 * - 1 <= nums.length <= 10
 * - -10 <= nums[i] <= 10
 * - All the numbers of nums are unique
 * */

// =============================================================================
// Approach: Backtracking
// - We can use backtracking to generate all possible subsets of the given array.
// - We can start with an empty subset and then recursively add each element to the current subset.
// - At each step, we can either include the current element or exclude it.
// - We can use a helper function to keep track of the current subset and the index of the next element to consider.
// - We can also use a list to store all the subsets we have generated so far.
// - The base case for the recursion is when we have considered all elements in the array.
// - In this case, we can add the current subset to the list of subsets.
// - We can then return the list of subsets after the recursion is complete.
// =============================================================================
// Time Complexity: O(n * 2^n) because we have 2 choices (include or exclude) for each of the n elements.
// Space Complexity: O(n * 2^n) because we are using a list to store the subsets and a stack to keep track of the current subset.
// =============================================================================
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    const result = []; // Initialize an array to store all subsets.

    function backtrack(start, path = []) {
        result.push([...path]); // Add the current subset (path) to the result array.
        for (let i = start; i < nums.length; i++) { // Iterate through the remaining elements starting from 'start'.
            path.push(nums[i]); // Include the current element in the subset.
            backtrack(i + 1, path); // Recursively generate subsets including the current element.
            path.pop(); // Backtrack by removing the last element to explore other subsets.
        }
    }

    backtrack(0, []); // Start the backtracking process with an empty subset and starting index 0.
    return result; // Return the list of all subsets.
}


// Test cases
console.log(subsets([1, 2, 3])); // Expected output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
console.log(subsets([0])); // Expected output: [[], [0]]
console.log(subsets([1])); // Expected output: [[], [1]]