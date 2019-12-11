//Runtime of this sort depends on the selection of pivot
//Ideally it should the median of the given data
/**
 * Best case: O(nlogn)
 * Avg case: O(nlogn)
 * Worst case: O(n^2) - If chosen pivot is minimum or max element present in the array
 * space complexity: O(logn)
 */
function pivot(arr, start = 0, end = arr.length + 1) {
    let pivotEl = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivotEl > arr[i]) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
        // console.log(arr);
    }
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        //left branch
        quickSort(arr, left, pivotIdx - 1);
        //right branch
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

quickSort([4, 6, 9, 1, 2, 5]);
