// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

// Constraints:

// 1 <= nums.length <= 10^4
// -10^5 <= nums[i] <= 10^5
// 0 <= left <= right < nums.length
// At most 10^4 calls will be made to sumRange.

// =============================================================================
// Approach: Prefix Sum
// 1. Create a prefix sum array to store the cumulative sum of the elements in the input array.
// 2. The prefix sum array is initialized with an extra element at index 0, which is set to 0.
// 3. The prefix sum at index `i` is calculated as the sum of the prefix sum at index i-1 and the element at index i in the input array.
// 4. The sumRange method calculates the sum of elements between indices left and right by subtracting the prefix sum at index left from the prefix sum at index right + 1.
// =============================================================================
// 5. The time complexity of the sumRange method is O(1) since it only involves a few arithmetic operations.
// 6. The space complexity is O(n) for the prefix sum array, where n is the length of the input array.
// 7. The constructor has a time complexity of O(n) for creating the prefix sum array.
// 8. The overall time complexity for the constructor is O(n) and for each sumRange call is O(1).
// 9. The space complexity is O(n) for the prefix sum array.
// =============================================================================
// 10. The prefix sum array allows for efficient range sum queries in constant time.
// 11. The prefix sum array is built in a single pass through the input array, making it efficient for large arrays.
// =============================================================================
class NumArray {
    constructor(nums) {
        this.prefixer = Array(nums.length + 1);
        this.prefixer[0] = 0;
        for (let i = 0; i < nums.length; i++)
            this.prefixer[i + 1] = this.prefixer[i] + nums[i];
    }

    sumRange(left, right) {
        return this.prefixer[right + 1] - this.prefixer[left];
    }
}

// Example usage:
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // Output: 1
console.log(numArray.sumRange(2, 5)); // Output: -1
// Explanation:
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1