let count = 0;

function summation(num) {
    for (i = 0; i <= num; i++) {
        count += i;
    }
    return count;
}
console.log(summation(8));