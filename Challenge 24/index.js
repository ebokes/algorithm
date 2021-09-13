function descendingOrder(n){
    let x = n.toString().split('').sort((a,b)=>b-a)
    let y = parseInt(x.join(''))
    return y
}