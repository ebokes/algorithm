function squareEveryDigit(num){
    let a = num.toString().split('')
    let b = (a.map(item => {return parseInt(item**2)})).join('')
    return parseInt(b)
}
console.log(squareEveryDigit(21345))