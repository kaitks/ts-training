/* eslint-disable no-param-reassign */

function arrayMove<T>(arr: T[], fromIndex: number, toIndex: number) {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
    return arr;
}

const findMovedPeople = (person: number, qs: number[], qe: number[]) => {
    const startPos = qs.indexOf(person);
    const endPos = qe.indexOf(person);
    const bribeCount = startPos - endPos;
    arrayMove(qs, startPos, endPos);
    return bribeCount;
};

export default function minimumBribes(q: number[]) {
    const bribeCountList: number[] = [];
    const qs = Array.from(Array(q.length), (e, i) => i + 1);
    for (let i = 0; i < q.length; i++) {
        const bribeCount = findMovedPeople(q[i], qs, q);
        if (bribeCount > 2) {
            console.log("Too chaotic");
            return null;
        }
        bribeCountList.push(bribeCount);
    }
    console.log(bribeCountList.reduce((a, b) => a + b, 0));
    return null;
}
