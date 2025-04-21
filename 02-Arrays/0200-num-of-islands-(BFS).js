// https://leetcode.com/problems/number-of-islands/description/
// Asked in OpenGOV interview, April 2025.

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3


// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

// =============================================================================
// Approach: Iterative BFS
// 1. Initialize a variable to keep track of the number of islands.
// 2. Create a helper function to perform BFS on the grid.
// 3. Iterate through each cell in the grid.
// 4. If the cell is '1', increment the island count and call the BFS function to mark all connected '1's as visited.
// 5. Return the island count.
// 6. The BFS function will use a queue to explore all adjacent '1's and mark them as visited by changing them to '0'.
// 7. The BFS function will also check the boundaries of the grid to avoid going out of bounds.
// 8. The BFS function will continue until all connected '1's are visited.
// 9. The BFS function will return when all connected '1's are marked as visited.
// 10. The main function will return the total number of islands found.
// =============================================================================
// Time Complexity: O(m*n), where m is the number of rows and n is the number of columns in the grid.
// Space Complexity: O(m*n), where m is the number of rows and n is the number of columns in the grid.
// =============================================================================
// Code:
function numIslands(grid = []) {
    if (!grid?.length) return 0;
    let islands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const bfs = (i, j) => {
        const queue = [[i, j]];
        grid[i][j] = '0'; // Mark as visited in the grid itself, this saves memory by modifying the array in place.
        while (queue.length) {
            const [x, y] = queue.shift();
            // Check all 4 directions
            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // down, up, right, left
            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;
                // Check if the new position is within bounds and is land
                if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === '1') {
                    queue.push([newX, newY]);
                    grid[newX][newY] = '0'; // Mark as visited
                }
            }
        }
    }

    // Iterate through each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If the cell is land, perform BFS
            if (grid[i][j] === '1') {
                console.log("rootLoop");
                
                islands++;
                bfs(i, j);
            }
        }
    }
    return islands;
}

// Test cases:
console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]))

console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]));
