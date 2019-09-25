export default function staircase(n: number) {
    for (let i = n - 1; i >= 0; i--) {
        const spaces = Array.from(Array(i).keys()).map(() => " ");
        const stairs = Array.from(Array(n - i).keys()).map(() => "#");
        console.log(spaces.concat(stairs).join(""));
    }
}
