export default function diagonalDifference(arr: number[][]) {
    let diagonalLeft = 0;
    let diagonalRight = 0;
    for (let lineIndex = 0; lineIndex < arr.length; lineIndex++) {
        diagonalLeft += arr[lineIndex][lineIndex];
    }
    for (let lineIndex = 0; lineIndex < arr.length; lineIndex++) {
        diagonalRight += arr[lineIndex][arr.length - 1 - lineIndex];
    }

    return Math.abs(diagonalLeft - diagonalRight);
    // Write your code here
}
