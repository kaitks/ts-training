/* eslint-disable no-restricted-properties */
function findPerfectTree(T) {
    if (T === null)
        return {
            isPerfect: true,
            height: 0,
            rootTree: null,
        };

    const leftR = findPerfectTree(T.l);
    const rightR = findPerfectTree(T.r);
    if (leftR.isPerfect && rightR.isPerfect && leftR.height === rightR.height)
        return {
            isPerfect: true,
            height: leftR.height + 1,
            rootTree: T,
        };

    return {
        isPerfect: false,
        height: Math.max(leftR.height, rightR.height),
        rootTree:
            leftR.height > rightR.height ? leftR.rootTree : rightR.rootTree,
    };
}

function solution(T) {
    const biggestPerfectTree = findPerfectTree(T);
    return Math.pow(2, biggestPerfectTree.height + 1) - 1;
    // write your code in JavaScript (Node.js 8.9.4)
}

const input = {
    x: 1,
    l: { x: 2, l: null, r: { x: 4, l: null, r: null } },
    r: {
        x: 3,
        l: null,
        r: {
            x: 6,
            l: { x: 9, l: null, r: null },
            r: { x: 10, l: { x: 11, l: null, r: null }, r: null },
        },
    },
};

solution(input);
