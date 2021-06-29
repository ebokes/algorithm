function findNextSquare(square) {
    let num = Math.sqrt(square);
    num++;
    let result = num ** 2;

    // return result % num === 0 ? result : -1
    if (result % num === 0) {
        return result;
    }
    return -1;
}
console.log(findNextSquare(144));