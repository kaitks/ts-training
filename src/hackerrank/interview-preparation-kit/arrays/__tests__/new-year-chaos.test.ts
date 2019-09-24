import minimumBribes from "../new-year-chaos";

const spy = jest.spyOn(console, "log");

test("minimumBribes should pass", () => {
    minimumBribes([2, 1, 5, 3, 4]);
    expect(spy).toBeCalledWith(3);
});

test("minimumBribes should fail", () => {
    minimumBribes([2, 5, 1, 3, 4]);
    expect(spy).toBeCalledWith("Too chaotic");
});
