# Dynamic Programming (DP)

Dynamic Programming is a method for solving complex problems by breaking them down into simpler subproblems. It is particularly useful for optimization problems where the solution can be built incrementally using previously computed results.

## Key Concepts
1. **Overlapping Subproblems**: Problems can be divided into smaller subproblems that are solved multiple times.
2. **Optimal Substructure**: The solution to a problem can be constructed from the solutions of its subproblems.
3. **Memoization**: Storing the results of expensive function calls and reusing them when the same inputs occur again.
4. **Tabulation**: Building a table (usually an array) to solve subproblems iteratively.

## Steps to Solve a DP Problem
1. Define the problem in terms of smaller subproblems.
2. Decide whether to use **top-down (recursion + memoization)** or **bottom-up (tabulation)** approach.
3. Write the recurrence relation.
4. Implement the solution.

## Use Cases
1. **Fibonacci Sequence**: Calculating Fibonacci numbers efficiently using memoization or tabulation.
2. **Knapsack Problem**: Determining the maximum value that can be obtained with a given weight capacity.
3. **Longest Common Subsequence (LCS)**: Finding the longest subsequence common to two sequences.
4. **Longest Increasing Subsequence (LIS)**: Finding the longest subsequence where elements are in increasing order.
5. **Matrix Chain Multiplication**: Determining the most efficient way to multiply a sequence of matrices.
6. **Subset Sum Problem**: Checking if a subset with a given sum exists in a set.
7. **Coin Change Problem**: Finding the minimum number of coins needed to make a given amount.
8. **Edit Distance**: Calculating the minimum number of operations required to convert one string into another.
9. **Partition Problem**: Dividing a set into two subsets with equal sum.
10. **Shortest Path Problems**: Solving problems like Floyd-Warshall or Bellman-Ford for graph shortest paths.

---

## Example 1: Fibonacci Numbers

### Problem
Find the nth Fibonacci number where:
- `Fib(0) = 0`
- `Fib(1) = 1`
- `Fib(n) = Fib(n-1) + Fib(n-2)`

### JavaScript Implementation
```javascript
// Top-down approach (Memoization)
function fib(n, memo = {}) {
    if (n <= 1) return n;
    if (n in memo) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

console.log(fib(10)); // Output: 55
```

### Python Implementation
```python
# Top-down approach (Memoization)
def fib(n, memo={}):
    if n <= 1:
        return n
    if n in memo:
        return memo[n]
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]

print(fib(10))  # Output: 55
```

---

## Example 2: Knapsack Problem

### Problem
Given weights and values of items, determine the maximum value that can be obtained with a given weight capacity.

### JavaScript Implementation
```javascript
function knapsack(values, weights, capacity) {
    const n = values.length;

    // Step 1: Initialize a 2D array (dp) to store the maximum value for each subproblem
    const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

    // Step 2: Iterate through each item
    for (let i = 1; i <= n; i++) {
        // Step 3: Iterate through each possible weight capacity
        for (let w = 1; w <= capacity; w++) {
            // Step 4: Check if the current item's weight is less than or equal to the current capacity
            if (weights[i - 1] <= w) {
                // Step 5: Take the maximum value between including or excluding the current item
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                // Step 6: If the current item's weight exceeds the capacity, exclude the item
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // Step 7: Return the maximum value that can be obtained with the given capacity
    return dp[n][capacity];
}

console.log(knapsack([60, 100, 120], [10, 20, 30], 50)); // Output: 220
```

### Python Implementation
```python
def knapsack(values, weights, capacity):
    n = len(values)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1])
            else:
                dp[i][w] = dp[i - 1][w]
    
    return dp[n][capacity]

print(knapsack([60, 100, 120], [10, 20, 30], 50))  # Output: 220
```

---

## Further Reading
- [Dynamic Programming on GeeksforGeeks](https://www.geeksforgeeks.org/dynamic-programming/)
- [Dynamic Programming on LeetCode](https://leetcode.com/tag/dynamic-programming/)
- [MIT OpenCourseWare - DP Lecture](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-19-dynamic-programming-i-fibonacci-shortest-paths/)
