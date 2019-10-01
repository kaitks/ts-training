function bitCount(A, B) {
    const result = (A * B).toString(2);
    const count1 = result.split("").filter(c => c === "1").length;
    return count1;
}

bitCount(100000000, 100000000);
