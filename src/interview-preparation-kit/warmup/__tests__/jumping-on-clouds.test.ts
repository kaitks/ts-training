import jumpingOnClouds from "../jumping-on-clouds";

test("jumpingOnClouds should pass", () => {
    const result = jumpingOnClouds([0, 0, 0, 0, 1, 0]);
    expect(result).toBe(3);
});
