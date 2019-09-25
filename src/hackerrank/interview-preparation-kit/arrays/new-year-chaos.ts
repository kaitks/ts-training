const calculateStep = (person: number, qs: number[], qe: number[]) => {
    const startPos = qs.indexOf(person);
    const endPos = qe.indexOf(person);
    const newQs = [...qs];
    newQs.splice(startPos, 0);
    newQs.splice(endPos, 0, person);
    const result: [number, number[]] = [startPos - endPos, newQs];
    return result;
};

const largerThanTwo = (n: number) => n > 2;

export default function minimumBribes(q: number[]) {
    const steps: number[] = [];
    let qs = Array.from(Array(q.length), (e, i) => i + 1);
    for (let i = q.length; i >= 1; i--) {
        const [step, newQs] = calculateStep(i, qs, q);
        steps.push(step);
        qs = newQs;
    }
    if (steps.some(largerThanTwo)) console.log("Too chaotic");
    else console.log(steps.reduce((a, b) => a + b, 0));
    return null;
}
