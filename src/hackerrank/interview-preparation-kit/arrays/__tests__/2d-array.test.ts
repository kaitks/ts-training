import hourglassSum, { toHourglasses } from "../2d-array";

test("hourglassSum should pass", () => {
    const input = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0],
    ];
    const hourglasses = toHourglasses(input);
    const hourglassSumResult = hourglassSum(input);
    expect(hourglasses).toHaveLength(16);
    expect(hourglassSumResult).toBe(19);
});
