import * as t from "io-ts";
import { isLeft } from "fp-ts/lib/Either";
import { PathReporter } from "io-ts/lib/PathReporter";

const Product = t.interface({
    id: t.number,
    name: t.string,
    quantity: t.number,
    type: t.union([t.literal("FURNITURE"), t.literal("BOOK")]),
});
const Products = t.array(Product);

export default function getProducts() {
    // A mock REST API response
    const apiResponse = [
        {
            id: 1,
            name: "Table",
            type: "FURNITURE",
            quantity: 5,
        },
        {
            id: "2",
            name: "The Lord of the Rings",
            type: "BOOK",
            quantity: 10,
        },
    ];
    // Decode i.e. validate the api response
    const result = Products.decode(apiResponse);
    // Use a reporter to throw an error if validation fails
    if (isLeft(result)) throw new Error(PathReporter.report(result).join("\n"));
    // Get the validated value and use it in your application
    return result.right;
}
