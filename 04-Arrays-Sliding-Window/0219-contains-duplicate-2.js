// https://leetcode.com/problems/contains-duplicate-ii/description/
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
// Implies that k is the length of the sliding window. 

// Example 1:
// Input: nums = [1,2,3,1], k = 3
// Output: true

// Example 2:
// Input: nums = [1,0,1,1], k = 1
// Output: true

// Example 3:
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 
// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

// =============================================================================
// Approach: Sliding Window
// 1. Initialize a Set to keep track of the elements in the current window.
// 2. Iterate through the array with an index i.
// 3. For each element nums[i], check if it is already in the Set.
//    - If it is, return true (found a duplicate within the range k).
//    - If it is not, add it to the Set.
// 4. If the size of the Set exceeds k, remove the oldest element (nums[i - k]) from the Set.
// 5. If no duplicates are found after iterating through the array, return false.
// =============================================================================
// Time Complexity: O(n)
// Space Complexity: O(k), for storing the set.
// =============================================================================
// Implementation
/**
 * 
 * @param {number[]} nums 
 * @param {number} k 
 */
function containsNearbyDuplicate(nums, k) {
    const seen = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(seen.has(nums[i])) return true;

        seen.add(nums[i]);
        if(seen.size > k) seen.delete(nums[i-k]);
    }

    return false;
}

// Example Usage:
const nums1 = [1, 2, 3, 1];
const k1 = 3;
console.log(containsNearbyDuplicate(nums1, k1)); // Output: true
const nums2 = [1, 0, 1, 1];
const k2 = 1;
console.log(containsNearbyDuplicate(nums2, k2)); // Output: true
const nums3 = [1, 2, 3, 1, 2, 3];
const k3 = 2;
console.log(containsNearbyDuplicate(nums3, k3)); // Output: false
