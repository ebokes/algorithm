const number = function (array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) newArray.push(`${i + 1}: ${array[i]}`)
    return newArray;
}