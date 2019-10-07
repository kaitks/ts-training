// Quick-sort with pivot picked as the middle of the array (dynamic pivot)
// Most Javascript implement for quick-sort online is wrong with dupliacate value in array
// This is the implementation with these cases passed

import arraySwap from "../lib/array-swap";

export default function quickSort(arr: number[], start: number, end: number) {
    if (start >= end) return arr;
    let pivot = Math.floor((start + end) / 2);
    const pivotValue = arr[pivot];
    let i = start;
    let j = end;
    while (i < j) {
        while (arr[i] < pivotValue) {
            i++;
        }
        while (arr[j] > pivotValue) {
            j--;
        }
        if (arr[i] === pivotValue && arr[j] === pivotValue) {
            j--;
        } else {
            arraySwap(arr, i, j);
            if (i === pivot) {
                pivot = j;
            } else if (j === pivot) {
                pivot = i;
            }
        }
    }
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
    return arr;
}
