function convertToDecimal(array) {
    let arr = array;
    let revArr = arr.reverse();
    let total = 0;
    for (let i = 0; i < revArr.length; i++) {
        total += revArr[i] * (2 ** i);
    }
    return total;

}