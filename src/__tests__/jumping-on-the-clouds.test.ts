import jumpingOnTheClouds from '../jumping-on-the-clouds';

test('jumpingOnTheClouds should pass', () => {
    const result = jumpingOnTheClouds(6, [0, 0, 0, 0, 1, 0]);
    expect(result).toBe(3);
});
