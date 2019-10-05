/* eslint-disable @typescript-eslint/no-unused-vars */
import faker from "faker";
import quickSort from "../quick-sort";

test("", () => {
    const input = Array.from(Array(9).keys()).map(() =>
        faker.random.number({
            min: 1,
            max: 99,
        })
    );
    const result = quickSort(input, 0, input.length - 1);
    console.log(result);
});
