type TwoDimensionArray = number[][];
type Hourglass = [[number, number, number], [number], [number, number, number]];
const GLASS_SIZE = 3;

const sumHourglass = (hourglass: Hourglass): number => {
    return hourglass.flat(2).reduce((a: number, b: number) => a + b, 0);
};

export const toHourglasses = (arr: TwoDimensionArray) => {
    const arrLength = arr.length;
    let x = 0;
    let y = 0;
    const hourglasses: Hourglass[] = [];

    const limit = arrLength - GLASS_SIZE;
    while (true) {
        const hourglass: Hourglass = [
            [arr[y][x], arr[y][x + 1], arr[y][x + 2]],
            [arr[y + 1][x + 1]],
            [arr[y + 2][x], arr[y + 2][x + 1], arr[y + 2][x + 2]],
        ];
        hourglasses.push(hourglass);
        if (x < limit) {
            x++;
        } else if (x === limit && y < limit) {
            x = 0;
            y++;
        } else break;
    }
    return hourglasses;
};

export default function hourglassSum(arr: TwoDimensionArray) {
    const hourglasses = toHourglasses(arr);
    const hourglassSumList = hourglasses.map(sumHourglass);
    return Math.max(...hourglassSumList);
}
