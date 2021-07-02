let array = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]

function countSheeps(arrayOfSheep) {
    let population = 0;
    for (let item of arrayOfSheep) {
        if (item === true) {
            population++;
        }
    }
    return population;
}
console.log(countSheeps(array));