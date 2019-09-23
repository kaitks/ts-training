function countA(string: string, limit: number) {
    let aCount = 0;
    let index = 0;
    while (index < limit) {
        const pos = index % string.length;
        if (string[pos] === "a") aCount++;
        index++;
    }
    return aCount;
}

export default function repeatedString(s: string, n: number) {
    const aCountInString = countA(s, s.length);
    const aCountEstimate = Math.floor(n / s.length) * aCountInString;
    const aCountInRemaining = countA(s, n % s.length);
    return aCountEstimate + aCountInRemaining;
}
