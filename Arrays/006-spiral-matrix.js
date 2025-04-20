// https://leetcode.com/problems/spiral-matrix/description/
// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:
// Input: matrix = [
//      [1,2,3],
//      [4,5,6],
//      [7,8,9]
// ]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2: 
// Input: matrix = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Approach: 
// 1. Initialize an empty array to store the result.
// 2. Check if the matrix is empty. If it is, return the empty array.
// 3. Initialize variables to keep track of the boundaries of the matrix: top, bottom, left, and right.
// 4. Use a while loop to iterate until the top boundary is greater than the bottom boundary and the left boundary is less than the right boundary.
// 5. Traverse the top row from left to right and add the elements to the result array. Increment the top boundary.
// 6. Traverse the right column from top to bottom and add the elements to the result array. Decrement the right boundary.
// 7. Check if there are still rows left to traverse. If so, traverse the bottom row from right to left and add the elements to the result array. Decrement the bottom boundary.
// 8. Check if there are still columns left to traverse. If so, traverse the left column from bottom to top and add the elements to the result array. Increment the left boundary.
// 9. Repeat steps 5-8 until all elements have been added to the result array.
// 10. Return the result array.
// Time Complexity: O(n)
// Space Complexity: O(1), since we are using a constant amount of extra space for the boundaries and result array.
// Note: The result array is not counted in the space complexity since it is the output of the function.
// Code:
function spiralMatrix_1(grid = []) {
    if(!grid?.length) return [];
    const result = [];
    let top = 0;
    let bottom = grid.length - 1;
    let left = 0;
    let right = grid[0].length - 1;
    while (top <= bottom && left <= right) {
        // Traverse the top row
        for (let i = left; i <= right; i++) {
            result.push(grid[top][i]);
        }
        top++;

        // Traverse the right column
        for (let i = top; i <= bottom; i++) {
            result.push(grid[i][right]);
        }
        right--;

        // Check if there are still rows left to traverse
        if (top <= bottom) {
            // Traverse the bottom row
            for (let i = right; i >= left; i--) {
                result.push(grid[bottom][i]);
            }
            bottom--;
        }

        // Check if there are still columns left to traverse
        if (left <= right) {
            // Traverse the left column
            for (let i = bottom; i >= top; i--) {
                result.push(grid[i][left]);
            }
            left++;
        }
    }
    return result;
}

// Test cases
console.log(spiralMatrix_1([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])); // Output: [1,2,3,6,9,8,7,4,5]
console.log(spiralMatrix_1([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
])); // Output: [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralMatrix_1([
    [1, 2],
    [3, 4]
])); // Output: [1,2,4,3]
console.log(spiralMatrix_1([
    [1]
])); // Output: [1] 

console.log("======================");


// Approach 2:
// 1. Initialize an empty array to store the result.
// 2. Check if the matrix is empty. If it is, return the empty array.
// 3. Use a while loop to iterate until the matrix is empty.
// 4. In each iteration, remove the first row of the matrix and add it to the result array.
// 5. Remove the last element of each row of the remaining matrix and add it to the result array.
// 6. Remove the last row of the matrix and add it to the result array.
// 7. Remove the first element of each row of the remaining matrix and add it to the result array.
// 8. Repeat steps 4-7 until the matrix is empty.
// 9. Return the result array.
// Time Complexity: O(n), since all loops are linear and no nesting is done. 
// Space Complexity: O(1), since we are using a constant amount of extra space for the result array.
function spiralMatrix_2(grid = []) {
    if(!grid?.length) return [];
    const result = [];
    while (grid.length) {
        // Remove the first row and add it to the result
        result.push(...grid.shift());
        // Remove the last element of each row and add it to the result
        for (let i = 0; i < grid.length; i++) {
            result.push(grid[i].pop());
        }
        // Remove the last row and add it to the result
        if (grid.length) {
            result.push(...grid.pop().reverse());
        }
        // Remove the first element of each row and add it to the result
        for (let i = grid.length - 1; i >= 0; i--) {
            result.push(grid[i].shift());
        }
    }
    return result;
}
// Test cases
console.log(spiralMatrix_2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])); // Output: [1,2,3,6,9,8,7,4,5]
console.log(spiralMatrix_2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
])); // Output: [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralMatrix_2([
    [1, 2],
    [3, 4]
])); // Output: [1,2,4,3]
console.log(spiralMatrix_2([
    [1]
])); // Output: [1]