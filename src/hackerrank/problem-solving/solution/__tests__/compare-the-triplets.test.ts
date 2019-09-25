import compareTriplets from "../compare-the-triplets";

test("", () => {
    const result = compareTriplets([5, 6, 7], [3, 6, 10]);
    expect(result).toStrictEqual([1, 1]);
});
