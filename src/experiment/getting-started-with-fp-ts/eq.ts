import { contramap } from "fp-ts/lib/Eq";

interface Eq<A> {
    /** returns `true` if `x` is equal to `y` */
    readonly equals: (x: A, y: A) => boolean;
}

const eqNumber: Eq<number> = {
    equals: (x, y) => x === y,
};

function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
    return (a, as) => as.some(item => E.equals(item, a));
}

console.log(elem(eqNumber)(1, [1, 2, 3])); // true
console.log(elem(eqNumber)(4, [1, 2, 3]));

type User = {
    userId: number;
    name: string;
};

/** two users are equal if their `userId` field is equal */
const eqUser = contramap((user: User) => user.userId)(eqNumber);

eqUser.equals(
    { userId: 1, name: "Giulio" },
    { userId: 1, name: "Giulio Canti" }
); // true
eqUser.equals({ userId: 1, name: "Giulio" }, { userId: 2, name: "Giulio" }); // false
