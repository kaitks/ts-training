import reverseArray from "../reverse-array";

test("reverseArray should pass", () => {
    const result = reverseArray([1, 4, 3, 2]);
    expect(result).toStrictEqual([2, 3, 4, 1]);
});
