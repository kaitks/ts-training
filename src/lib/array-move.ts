/* eslint-disable no-param-reassign */
export default function arrayMove<T>(
    arr: T[],
    fromIndex: number,
    toIndex: number
) {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
}
