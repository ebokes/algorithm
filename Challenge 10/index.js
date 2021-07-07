function digitize1(n) {
    let breakApart = n.toString().split('');
    let reversedArr = breakApart.reverse();
    let result = [];
    for (let item of reversedArr) {
        result.push(parseInt(item))
    }
    return result;
}
console.log(digitize1(348597));