function sumOfSquareNumbers(k) {
    let a = 0;
    while (a * a <= k) {
        let bSquared = k - a * a;
        let b = Math.floor(Math.sqrt(bSquared));
        if (b * b === bSquared) {
            return true;
        }
        a++;
    }
    return false;
}
