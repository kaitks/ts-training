import faker from "faker";
import quickSort from "../quick-sort-first";

test("random input", () => {
    const input = Array.from(Array(9).keys()).map(() =>
        faker.random.number({
            min: 1,
            max: 99,
        })
    );
    const result = quickSort(input, 0, input.length - 1);
    console.log(result);
});

test("custom input 1", () => {
    const input = [43, 13, 43, 22, 70, 62, 76, 2, 7];
    const result = quickSort(input, 0, input.length - 1);
    console.log(result);
});

test("custom input 2", () => {
    const input = [26, 40, 79, 53, 72, 79, 95, 92, 94];
    const result = quickSort(input, 0, input.length - 1);
    console.log(result);
});
