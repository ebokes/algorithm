function minMax(array) {
    let sortedArray = array.sort((a, b) => a - b);
    return [sortedArray[0], sortedArray[sortedArray.length - 1]]
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));