function sumDigits(num) {
    let array = Math.abs(num).toString().split('');
    let sum = 0;
    for (let arr of array) {
        sum += parseInt(arr);
    }
    return sum;
}