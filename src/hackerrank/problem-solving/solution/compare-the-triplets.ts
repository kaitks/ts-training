export default function compareTriplets(a: number[], b: number[]) {
    let aPoint: number = 0;
    let bPoint: number = 0;
    for (let i = 0; i < 3; i++) {
        const pointGap = a[i] - b[i];
        if (pointGap > 0) aPoint++;
        else if (pointGap < 0) bPoint++;
    }
    return [aPoint, bPoint];
}
