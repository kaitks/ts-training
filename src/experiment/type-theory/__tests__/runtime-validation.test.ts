import getProducts from "../runtime-validation";

test("", () => {
    const result = getProducts();
    expect(result).toBeTruthy();
});
