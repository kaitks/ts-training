import rotLeft from "../left-rotation";

test("", () => {
    const result = rotLeft([1, 2, 3, 4, 5], 4);
    expect(result).toStrictEqual([5, 1, 2, 3, 4]);
});
