import minimumSwaps from "../minimum-swaps";

test("minimumSwaps should pass", () => {
    const result = minimumSwaps([4, 3, 1, 2]);
    expect(result).toBe(3);
});
