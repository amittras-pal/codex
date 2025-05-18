/**
 * LeetCode Problem 784: Letter Case Permutation
 * Problem Statement:
 * Given a string s, you can transform every letter individually to be lowercase or uppercase 
 * to create another string. Return a list of all possible strings we could create. 
 * You can return the output in any order.
 * 
 * Link: https://leetcode.com/problems/letter-case-permutation/
 * 
 * 
 * 2 Solutions: ✅
 * - Iterative Backtracking
 * - Recursive Backtracking
 * 
 * Examples:
 * Example 1:
 * Input: s = "a1b2"
 * Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
 * 
 * Example 2:
 * Input: s = "3z4"
 * Output: ["3z4", "3Z4"]
 * 
 * Example 3:
 * Input: s = "12345"
 * Output: ["12345"]
 * 
 * Example 4:
 * Input: s = "0"
 * Output: ["0"]
 * 
 * Constraints:
 * - 1 <= s.length <= 12
 * - s consists of lowercase English letters, uppercase English letters, and digits.
 */

// =============================================================================
// Approach: Iterative Backtracking.
// - We will use a stack to keep track of the current string and the index of the next character to process.
// - For each character in the string, we will have two choices:
//   1. Keep the character as is.
//   2. Change the character to its opposite case (if it's a letter).
// - We will push both choices onto the stack and continue until we have processed all characters.
// - Finally, we will return the list of all possible strings.
// =============================================================================
// Time Complexity: O(2^n), where n is the length of the input string.
// Space Complexity: O(2^n), where n is the length of the input string.
// =============================================================================
/**
 * @param {string} str
 * @return {string[]}
 */
function letterCasePermutation_iterative(str) {
    const output = [""]; // Initialize the output array with an empty string to start building permutations.
    for (const char in str) { // Iterate through each character in the input string.
        const temp = []; // Temporary array to store the new permutations for the current character.
        if (/[0-9]/.test(str[char])) { // Check if the current character is a digit.
            for (const perm of output) { // For each existing permutation in the output array,
                temp.push(perm + str[char]); // Append the digit as is to the permutation.
            }
        } else { // If the current character is a letter,
            for (const perm of output) { // For each existing permutation in the output array,
                temp.push(perm + str[char].toLowerCase()); // Append the lowercase version of the letter.
                temp.push(perm + str[char].toUpperCase()); // Append the uppercase version of the letter.
            }
        }
        output.splice(0, output.length, ...temp); // Replace the output array with the new permutations.
    }
    return output; // Return the final list of all possible permutations.
}
// Test cases
console.log(letterCasePermutation_iterative("a1b2")); // Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
console.log(letterCasePermutation_iterative("3z4"));  // Output: ["3z4", "3Z4"]
console.log(letterCasePermutation_iterative("12345")); // Output: ["12345"]
console.log(letterCasePermutation_iterative("0"));    // Output: ["0"]


console.log('=================================');

// =============================================================================
// Approach 2: Recursive Backtracking.
// - We will use a recursive function to generate all possible permutations.
// - For each character in the string, we will have two choices:
//   1. Keep the character as is.
//   2. Change the character to its opposite case (if it's a letter).
// - We will use a helper function to build the permutations recursively.
// - Finally, we will return the list of all possible strings.
// =============================================================================
// Time Complexity: O(2^n), where n is the length of the input string.
// Space Complexity: O(n + 2^n), where n is the length of the input string.
// =============================================================================
/**
 * @param {string} str
 * @return {string[]}
 */
function letterCasePermutation_recursive(str) {
    const output = []; // Initialize the output array to store the permutations.
    function backtrack(start, current) { // Helper function for backtracking.
        if (start === str.length) { // If we have processed all characters,
            output.push(current); // Add the current permutation to the output array.
            return; // Return to explore other permutations.
        }
        const char = str[start]; // Get the current character.
        if (/[0-9]/.test(char)) { // If the character is a digit,
            backtrack(start + 1, current + char); // Append it as is and continue.
        } else { // If the character is a letter,
            backtrack(start + 1, current + char.toLowerCase()); // Append the lowercase version and continue.
            backtrack(start + 1, current + char.toUpperCase()); // Append the uppercase version and continue.
        }
    }
    backtrack(0, ""); // Start the backtracking process with an empty string.
    return output; // Return the final list of all possible permutations.
}

// Test cases
console.log(letterCasePermutation_recursive("a1b2")); // Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
console.log(letterCasePermutation_recursive("3z4"));  // Output: ["3z4", "3Z4"]
console.log(letterCasePermutation_recursive("12345")); // Output: ["12345"]
console.log(letterCasePermutation_recursive("0"));    // Output: ["0"]