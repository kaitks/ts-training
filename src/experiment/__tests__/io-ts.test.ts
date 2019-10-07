import getProducts from "../io-ts";

test("", () => {
    const result = getProducts();
    expect(result).toBeTruthy();
});
