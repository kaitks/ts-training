import repeatedString from "../repeated-string";

test("repeatedString should pass", () => {
    const result = repeatedString("aba", 10);
    expect(result).toBe(7);
});
