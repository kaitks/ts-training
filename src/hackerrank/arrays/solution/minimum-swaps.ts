/* eslint-disable no-param-reassign */
function arrayGen(n: number) {
    return Array.from(Array(n).keys());
}

function removeElement(arr: number[], e: number) {
    const index = arr.indexOf(e);
    if (index !== -1) arr.splice(index, 1);
}

export default function minimumSwaps(arr: number[]) {
    let swap = 0;
    const indexList = arrayGen(arr.length);
    while (indexList.length > 1) {
        const index = indexList.shift() as number;
        const expectedValue = index + 1;
        let indexValue = arr[index];

        while (indexValue !== expectedValue) {
            const expectedIndex = indexValue - 1;
            indexValue = arr[expectedIndex];
            swap++;
            removeElement(indexList, expectedIndex);
        }
    }
    return swap;
}
