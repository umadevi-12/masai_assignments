function isHappy(n) {
    let seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumOfSquares(n);
    }

    return n === 1;
}

function sumOfSquares(num) {
    return num.toString()
              .split('')
              .map(digit => parseInt(digit) ** 2)
              .reduce((a, b) => a + b, 0);
}