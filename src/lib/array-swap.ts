/* eslint-disable no-param-reassign */
export default function arraySwap<T>(
    arr: T[],
    fromIndex: number,
    toIndex: number
) {
    [arr[fromIndex], arr[toIndex]] = [arr[toIndex], arr[fromIndex]];
}
