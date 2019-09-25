export default function minimumBribes(q: number[]) {
    let bribeCount: number = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        const person = q[i];
        const personOriginalIndex = person - 1;
        if (personOriginalIndex - i > 2) {
            console.log("Too chaotic");
            return null;
        }
        // find number of bribes that person A receive
        // if person B bribe person A, B will larger than A
        // thus number of person larger than A will be the number of person have bribed A
        for (let j = Math.max(0, personOriginalIndex - 1); j < i; j++) {
            if (q[j] > person) bribeCount++;
        }
    }
    console.log(bribeCount);
    return null;
}
