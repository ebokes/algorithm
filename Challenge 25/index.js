function highAndLow(num){
    let arr = num.split(' ').sort((a,b)=>a-b)
    let newArray = ''
    for (let i = 0; i<arr.length; i++)
    return newArray+=`${arr[arr.length-1]} ${arr[0]}`
}
console.log(highAndLow("1 2 3 4 5"))
console.log(highAndLow("1 2 -3 4 5"))
console.log(highAndLow("1 9 3 4 -5"))

//Codewars solution
// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }


//My first try, output was integer and not string as requested
// let array = numbers.split(' ');
//   let orderedArray = array.sort();
//   let newArray = []
//   // for(let i=0;i<orderedArray.length;i++){
//   newArray.push(orderedArray[orderedArray.length-1]);
//   newArray.push(orderedArray[0]);
//   return newArray.join(' ');