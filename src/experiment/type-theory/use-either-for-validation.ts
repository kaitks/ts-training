import {
    Either,
    left,
    right,
    chain,
    getValidation,
    mapLeft,
    map,
} from "fp-ts/lib/Either";

import { pipe } from "fp-ts/lib/pipeable";

import { getSemigroup, NonEmptyArray } from "fp-ts/lib/NonEmptyArray";

import { sequenceT } from "fp-ts/lib/Apply";

const minLength = (s: string): Either<string, string> =>
    s.length >= 6 ? right(s) : left("at least 6 characters");

const oneCapital = (s: string): Either<string, string> =>
    /[A-Z]/g.test(s) ? right(s) : left("at least one capital letter");

const oneNumber = (s: string): Either<string, string> =>
    /[0-9]/g.test(s) ? right(s) : left("at least one number");

const validatePassword = (s: string): Either<string, string> =>
    pipe(
        minLength(s),
        chain(oneCapital),
        chain(oneNumber)
    );

console.log(validatePassword("ab"));
console.log(validatePassword("abcdef"));
console.log(validatePassword("Abcdef"));

function lift<E, A>(
    check: (a: A) => Either<E, A>
): (a: A) => Either<NonEmptyArray<E>, A> {
    return a =>
        pipe(
            check(a),
            mapLeft(a => [a])
        );
}

function validatePasswordCombination(
    s: string
): Either<NonEmptyArray<string>, string> {
    return pipe(
        sequenceT(getValidation(getSemigroup<string>()))(
            lift(minLength)(s),
            lift(oneCapital)(s),
            lift(oneNumber)(s)
        ),
        map(() => s)
    );
}
console.log(validatePasswordCombination("ab"));
