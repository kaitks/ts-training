const sum = (a: number, b: number) => a + b;

export default function miniMaxSum(arr: number[]) {
    const sorted = arr.sort();
    const minSum = sorted.slice(0, 4).reduce(sum, 0);
    const maxSum = sorted.slice(1, 5).reduce(sum, 0);
    console.log(minSum, maxSum);
}
