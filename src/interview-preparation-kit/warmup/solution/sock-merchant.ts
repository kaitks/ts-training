type Sock = number;
type Color = number;

const countPair = (socks: Sock[]) => Math.floor(socks.length / 2);

export default function sockMerchant(n: number, ar: Sock[]) {
    if (n !== ar.length) throw new Error("number of socks does not match!");
    const sockPair: Dictionary<Color, Sock[]> = {};
    ar.forEach(sock => {
        const socksWithSameColor = sockPair[sock] || <Sock[]>[];
        sockPair[sock] = [...socksWithSameColor, sock];
    });
    const numberOfPair = Object.entries(sockPair)
        .map(([, socks]) => countPair(socks as Sock[]))
        .reduce((a, b) => a + b, 0);
    return numberOfPair;
}
