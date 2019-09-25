export default function reverseArray(a: number[]) {
    const reversed: number[] = [];
    for (let i = a.length - 1; i >= 0; i--) {
        reversed.push(a[i]);
    }
    return reversed;
}
