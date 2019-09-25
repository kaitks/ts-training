import countingValleys from "../counting-valleys";

test("countingValleys should pass", () => {
    const result = countingValleys(8, "UDDDUDUU");
    expect(result).toBe(1);
});
