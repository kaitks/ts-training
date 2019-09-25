export default function countRepeated(a: number[]) {
    const object: Record<number, number> = {};
    a.forEach(element => {
        object[element] = object[element] ? object[element] + 1 : 1;
    });
    return object;
}
