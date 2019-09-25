export default function rotLeft(a: number[], d: number) {
    const offset = d % a.length;
    const offsetElements = a.splice(0, offset);
    const rotatedArray = a.concat(offsetElements);
    return rotatedArray;
}
