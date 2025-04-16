// On a 2-D plane, there are n points with integer coordinates points[i] = [xi, yi]. 
// Return the minimum time in seconds to visit all points in the order given by points. 
// You can move according to the following rules:

// In 1 second, you can either:
// Move vertically by one unit.
// Move horizontally by one unit.
// move diagonally sqrt(2) units. (in other words, move diagonally by one unit in both the x and y directions simultaneously).

// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that are not part of the array, but these don't count as vitits.

// ASSUMING: starting point to be the first coordinate in the array.

// =============================================================================

// Example 1:
// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7

// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
// Time from [1,1] to [3,4] = 3 seconds 
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

// Example 2:

// Input: points = [[3,2],[-2,2]]
// Output: 5

// Constraints:
// points.length == n
// 1 <= n <= 100
// points[i].length == 2
// -1000 <= points[i][0], points[i][1] <= 1000

// =============================================================================

// Approach:
// 1. Initialize a variable to keep track of the total time.
// 2. Iterate through the points array.
// 3. For each point, calculate the time taken to move from the previous point to the current point.
// 4. CRUX: The time taken is the maximum of the absolute differences in x and y coordinates.
// 5. Add the time taken to the total time.
// 6. Return the total time.
// Time Complexity: O(n)
// Space Complexity: O(1)
function minTimeToVisitAllPoints(points) {
    let totalTime = 0;
    for (let i = 1; i < points.length; i++) {
        const [x1, y1] = points[i - 1];
        const [x2, y2] = points[i];
        const timeTaken = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
        totalTime += timeTaken;
    }
    // let i = 1;
    // while (i < points.length) {
    //     const [x1, y1] = points[i - 1];
    //     const [x2, y2] = points[i];
    //     const timeTaken = Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
    //     totalTime += timeTaken;
    //     i++;
    // }
    return totalTime;
}

// Example Usage:
console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])); // Output: 7
console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]])) // Output: 5