/* eslint-disable no-continue */
import arraySwap from "../lib/array-swap";

export default function quickSort(arr: number[], start: number, end: number) {
    if (start >= end) return arr;
    const pivot = start;
    const pivotValue = arr[pivot];
    let i = pivot + 1;
    let j = end;
    while (i <= j) {
        if (arr[i] < pivotValue) {
            i++;
            continue;
        } else if (arr[j] > pivotValue) {
            j--;
            continue;
        } else {
            arraySwap(arr, i, j);
            continue;
        }
    }
    arraySwap(arr, pivot, j);
    quickSort(arr, pivot, j - 1);
    quickSort(arr, i, end);
    return arr;
}
