function rowWeights(array){
    let newArray = []
    let teamOne = 0
    let teamTwo = 0
    array.filter((arr, index)=>{
        if(index%2===0){
            teamOne+=arr
        }else{
            teamTwo+=arr
        }
    })
    newArray.push(teamOne,teamTwo)
    return newArray
}
console.log(rowWeights([10, 20, 30]))

// Best solution in Codewars

// 1
// function rowWeights(array){
//     let t1 = array.filter((arr, i)=>i%2==0).reduce((a, b)=> a+b,0)
//     let t2 = array.filter((arr, i)=>i%2!==0).reduce((a, b)=> a+b,0)
//     return [t1, t2]
// }
// console.log(rowWeights([10, 20, 30]))

//2
// function rowWeights(array){
//     var arr = [0, 0];
//     for (var i = 0; i < array.length; i++) {
//       i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
//     }
//     return arr;
// }

//3
// rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])