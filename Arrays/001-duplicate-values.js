// https://leetcode.com/problems/contains-duplicate/description/
// Given an array of integers; return true if any interger appears at least twice in the array, and false if every element is distinct.

// Example:
// Input: [1,2,3,1]
// Output: true

// Input: [1,2,3,4]
// Output: false

// Input: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// Output: false


// Time Complexity: O(n)
// Space Complexity: O(n)
// Approach: Use a Set to keep track of the elements we have seen so far. If we encounter an element that is already in the Set, we return true. If we finish checking all elements without finding duplicates, we return false.
function hasDuplicates(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num))
            return true;
        seen.add(num);
    }
    return false;
}

console.log(hasDuplicates([1, 2, 3, 1])); // true
console.log(hasDuplicates([1, 2, 3, 4])); // false