function digitize(n) {
    return n.toString().split('').reverse().map(b=>parseInt(b))
}
console.log(digitize(348597))


//return n.toString().split('').reverse().map(Number)