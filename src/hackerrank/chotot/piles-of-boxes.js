/* eslint-disable operator-assignment */
function pilesOfBoxes(boxesInPiles) {
    // Write your code here
    const sorted = boxesInPiles.sort((a, b) => b - a);
    const parts = {};
    for (let i = 0; i < sorted.length; i++) {
        const current = sorted[i];
        if (!parts[current]) {
            parts[current] = 1;
        } else {
            parts[current] = parts[current] + 1;
        }
    }
    const numberCount = Object.values(parts);
    numberCount.sort((a, b) => b - a);
    const stepForEachJump = [0];

    for (let i = 0; i < numberCount.length - 1; i++) {
        const last = stepForEachJump[stepForEachJump.length - 1];
        const count = last + numberCount[i];
        stepForEachJump.push(count);
    }
    const step = stepForEachJump.reduce((a, b) => a + b);
    return step;
}

pilesOfBoxes([4, 5, 5, 2, 4]);
pilesOfBoxes([886, 777, 915, 1793]);
