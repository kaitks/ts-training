enum Move {
    Up = "U",
    Down = "D",
}

interface StatusInterface {
    altitude: number;
    readonly isInValley: boolean;
}

class Status implements StatusInterface {
    altitude: number;

    constructor(altitude: number) {
        this.altitude = altitude;
    }

    get isInValley() {
        return this.altitude < 0;
    }
}

export default function countingValleys(n: number, s: string) {
    if (n !== s.length) throw new Error("Number of steps do not match");
    let currentStatus = new Status(0);
    let valleyCount = 0;
    const moves = [...s];
    moves.forEach(move => {
        const nextAltitude =
            currentStatus.altitude + (move === Move.Up ? 1 : -1);
        const nextStatus = new Status(nextAltitude);
        if (!currentStatus.isInValley && nextStatus.isInValley) valleyCount++;
        currentStatus = nextStatus;
    });
    return valleyCount;
}
