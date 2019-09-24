import minimumBribes from "../new-year-chaos";

test("minimumBribes should pass", () => {
    const result = minimumBribes([2, 1, 5, 3, 4]);
    expect(result).toBe(3);
});

test("minimumBribes should fail", () => {
    const spy = jest.spyOn(console, "log");
    const result = minimumBribes([2, 5, 1, 3, 4]);
    expect(result).toBe(4);
    expect(spy).toBeCalledWith("Too chaotic");
});
