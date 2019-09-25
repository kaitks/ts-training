/* eslint-disable no-param-reassign */
function arrayGen(n: number) {
    return Array.from(Array(n).keys());
}

export default function minimumSwaps(arr: number[]) {
    let swap = 0;
    let indexList = arrayGen(arr.length);
    while (indexList.length > 1) {
        const index = indexList.shift() as number;
        const expectedValue = index + 1;
        let indexValue = arr[index];

        while (indexValue !== expectedValue) {
            const expectedIndex = indexValue - 1;
            indexValue = arr[expectedIndex];
            swap++;
            indexList = indexList.filter(i => i !== expectedIndex);
        }
    }
    return swap;
}
