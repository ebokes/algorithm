
function createPhoneNumber(numbers){
    let a = ""
    let b = ""
    let c = ""
    a=numbers.splice(0,3).join('')
    b=numbers.splice(0,3).join('')
    c=numbers.splice(0,4).join('')
    return `(${a}) ${b}-${c}`
    
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

//Second attempt (correct)
// function createPhoneNumber(numbers){
//     let a = ""
//     let b = ""
//     let c = ""
//     for(let i=0;i<3;i++){
//         a+=numbers[i]
//     }
//     for(let i=3;i<6;i++){
//         b+=numbers[i]
//     }
//     for(let i=6;i<=9;i++){
//         c+=numbers[i]
//     }
//     return `(${a}) ${b}-${c}`
    
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

//First attempt
// console.log('(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9] )