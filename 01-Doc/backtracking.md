# Backtracking: Generalized Idea

Backtracking is a problem-solving technique used to find solutions by exploring all possibilities. It involves building a solution incrementally and abandoning a path as soon as it is determined to be invalid (backtracking).

## Key Concepts
1. **Recursive Exploration**: Use recursion to explore all possible solutions.
2. **Base Case**: Define a condition to stop recursion.
3. **Pruning**: Skip paths that cannot lead to a valid solution.
4. **Backtrack**: Undo the last step and try the next possibility.

## Steps in Backtracking
1. Choose a starting point.
2. Make a decision and move forward.
3. Check if the current state is valid:
    - If valid, continue exploring.
    - If invalid, backtrack and try another option.
4. Repeat until a solution is found or all possibilities are exhausted.

## Use cases:
- **Constraint Satisfaction Problems (CSPs)**: Solving puzzles like Sudoku, crosswords, and N-Queens.
- **Combinatorial Optimization**: Generating subsets, permutations, and combinations.
- **Pathfinding Problems**: Finding paths in mazes or graphs.
- **Game Solvers**: Solving games like chess, Sudoku, or solving puzzles.
- **String Problems**: Generating palindromes, solving regular expression matching, or word segmentation.
- **Decision Problems**: Checking if a solution exists for problems like subset sum or partitioning.

---

## Example 1: Solving N-Queens Problem

### Python
```python
def solve_n_queens(n):
     def is_safe(board, row, col):
          for i in range(row):
                if board[i] == col or abs(board[i] - col) == row - i:
                     return False
          return True

     def backtrack(row, board):
          if row == n:
                solutions.append(board[:])
                return
          for col in range(n):
                if is_safe(board, row, col):
                     board[row] = col
                     backtrack(row + 1, board)
                     board[row] = -1

     solutions = []
     backtrack(0, [-1] * n)
     return solutions

print(solve_n_queens(4))
```

### JavaScript
```javascript
function solveNQueens(n) {
     const solutions = [];
     const board = Array(n).fill(-1);

     function isSafe(board, row, col) {
          for (let i = 0; i < row; i++) {
                if (board[i] === col || Math.abs(board[i] - col) === row - i) {
                     return false;
                }
          }
          return true;
     }

     function backtrack(row) {
          if (row === n) {
                solutions.push([...board]);
                return;
          }
          for (let col = 0; col < n; col++) {
                if (isSafe(board, row, col)) {
                     board[row] = col;
                     backtrack(row + 1);
                     board[row] = -1;
                }
          }
     }

     backtrack(0);
     return solutions;
}

console.log(solveNQueens(4));
```

---

## Example 2: Subset Generation

### Python
```python
def generate_subsets(nums):
     def backtrack(index, path):
          subsets.append(path[:])
          for i in range(index, len(nums)):
                path.append(nums[i])
                backtrack(i + 1, path)
                path.pop()

     subsets = []
     backtrack(0, [])
     return subsets

print(generate_subsets([1, 2, 3]))
```

### JavaScript
```javascript
function generateSubsets(nums) {
     const subsets = [];

     function backtrack(index, path) {
          subsets.push([...path]);
          for (let i = index; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(i + 1, path);
                path.pop();
          }
     }

     backtrack(0, []);
     return subsets;
}

console.log(generateSubsets([1, 2, 3]));
```

---

## Further Reading
- [Backtracking on GeeksforGeeks](https://www.geeksforgeeks.org/backtracking-algorithms/)
- [Backtracking on Wikipedia](https://en.wikipedia.org/wiki/Backtracking)
- [N-Queens Problem Explanation](https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/)
- [Subset Generation](https://leetcode.com/problems/subsets/)