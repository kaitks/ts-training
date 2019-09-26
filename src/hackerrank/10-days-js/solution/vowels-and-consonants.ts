export default function vowelsAndConsonants(s: string) {
    const vowels: string[] = [];
    const consonants: string[] = [];
    [...s].forEach(c => {
        if (["a", "e", "i", "o", "u"].includes(c)) vowels.push(c);
        else consonants.push(c);
    });
    vowels.forEach(c => console.log(c));
    consonants.forEach(c => console.log(c));
}
