/* 
Dynamic programming - Using past solutions to make solving a future problem easier.
Memoization - Storing the results of expensive function calls & returning the cached
              result when the same input occurs again.
Tabulation - Storing the result of previous solution in a table(array). Usually done using iteration.

Two pillars of dynamic programming:-
1. Overlapping subproblems
2. Optimal substructure
--> Fibonnacci series follow both of the above
--> Merge sort only follow optimal substructure
*/
function fibonnacci(n) {
    if (n <= 0) return undefined;
    if (n < 3) return 1;
    return fibonnacci(n - 1) + fibonnacci(n - 2)
}

// console.log(fibonnacci(7));

function memoizedFib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n < 3) return 1;
    let result = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
    memo[n] = result;
    return result;
}

// memoizedFib(5);

function tabulatedFib(n) {
    if (n < 3) return 1;
    let fib = [undefined, 1, 1];
    for (let i = 3; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib[n];
}

console.log(tabulatedFib(5))