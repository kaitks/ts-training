export default function minimumBribes(q: number[]) {
    let bribeCount: number = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        const person = q[i];
        const personOriginalIndex = person - 1;
        if (personOriginalIndex - i > 2) {
            console.log("Too chaotic");
            return null;
        }
        for (let j = Math.max(0, personOriginalIndex - 1); j < i; j++) {
            if (q[j] > person) bribeCount++;
        }
    }
    console.log(bribeCount);
    return null;
}
