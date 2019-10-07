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
    const apiResponse = [
        {
            id: 1,
            name: "Table",
            type: "FURNITURE",
            quantity: 5,
        },
        {
            id: 2,
            name: "The Lord of the Rings",
            type: "BOOK",
            quantity: 10,
        },
    ];
    const result = Products.decode(apiResponse);
    if (isLeft(result)) throw new Error(PathReporter.report(result).join("\n"));
    return result.right;
}
