const format = (n: number) => n.toFixed(6);

export default function plusMinus(arr: number[]) {
    let plus = 0;
    let zero = 0;
    let minus = 0;
    arr.forEach(n => {
        if (n > 0) plus++;
        else if (n === 0) zero++;
        else minus++;
    });
    [plus / arr.length, minus / arr.length, zero / arr.length]
        .map(format)
        .forEach(a => {
            console.log(a);
        });
    return null;
}
